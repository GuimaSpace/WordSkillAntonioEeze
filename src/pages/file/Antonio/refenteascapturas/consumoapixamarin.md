
---

http://10.0.2.2:5500 = http://localhost:5500
Não esqueça de na api ir em Project -> Properties -> Web e mudar a porta
Não esqueça de adicionar o NewtonSoft.json ao ApiServices
Não esqueça de permitir o uso de api no adroid.manifest usando Ex:
```
android:usesCleartextTraffic="true"
```

- para o primeiro passo, criar a api, criar um projeto ASP.NET Web Application (.NET Framework), com modelo Web API sem a configuração para HTTPS

- após criar o app, va para Web.config e configure os handlers dentro do system.webServer da seguinte maneira
```
<system.webServer>
    <handlers>
      <remove name="ExtensionlessUrlHandler-Integrated-4.0" />
      <remove name="OPTIONSVerbHandler" />
      <remove name="TRACEVerbHandler" />
      <add name="ExtensionlessUrlHandler-Integrated-4.0" path="*." verb="*" type="System.Web.Handlers.TransferRequestHandler" preCondition="integratedMode,runtimeVersionv4.0" />
    </handlers>
</system.webServer>
```

- Configure o WebApiConfig dentro do App_Start da seguinte maneira, adicione formatação em json, ignore null, e ignore loops, após isso remova a função de xml Ex:
```
public static class WebApiConfig
{
    public static void Register(HttpConfiguration config)
    {
        // Configuração e serviços de API Web

        // Rotas de API Web
        config.MapHttpAttributeRoutes();

	    config.Routes.MapHttpRoute(
        name: "DefaultApi",
        routeTemplate: "api/{controller}/{id}",
        defaults: new { id = RouteParameter.Optional }
        );

		config.Formatters.JsonFormatter.SerializerSettings.NullValueHandling = Newtonsoft.Json.NullValueHandling.Ignore;
        config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
        config.Formatters.Remove(config.Formatters.XmlFormatter);
    }
}
```

- na pasta models, será adicionado seus dados,  foi criado uma "model" de exemplo Ex:
```
public class User
{
    public int Id { get; set; }
    public string Nome { get; set; }
}
```

- após tudo isso, você criara um controller dentro da pasta Controllers, onde basicamente terá os metódods da API, lá você criara o prefixo de roda, os metodos como GET, que retorna os dados caso esteja tudo ok, e que retorne erro caso de errado utilizando o metodo try e catch Ex:
```
[RoutePrefix("api/usuarios")]
public class UsuariosController : ApiController
{
    [HttpGet]
    public IHttpActionResult Get()
    {
        try
        {
            User user1 = new User();
            User user2 = new User();
            User user3 = new User();

            user1.Nome = "Tonho";
            user2.Nome = "Dev";
            user3.Nome = "Macaco";

            var lista = new List<User>();
            lista.Add(user1);
            lista.Add(user2);
            lista.Add(user3);

            return Ok(lista);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.ToString());
            throw;
        }
    }
}
```

- também é importante ativar a visualização de pastas ocultas, ir a pasta da sua api -> vs (pasta oculta) -> "nome do projeto" -> config e abra applicationhost.config pesquise por sites e logo abaixo do localhost, adicione o localhost em numeros Ex:
```
<bindings>
    <binding protocol="http" bindingInformation="*:5500:localhost" />
    <binding protocol="http" bindingInformation="*:5500:127.0.0.1" />
</bindings>
```

- apos toda essa configuração da api, vamos para o consumo dela criando uma aplicação movel xamarin forms, crie no app base as pastas "Models", "Services", "ViewModels"

- dentro da pasta ViewModels cria uma class chamada BaseViewModels, lá você ira configurar a "troca de dados", lá transformara a BaseViewModel parte do INotifyPropertyChanged, uma variavel privada isBusy, que tera um modificador IsBusy que funciona a partir do SetProperty, com mais funções que verificao, e fazem e trazem dados Ex:
```
public class BaseViewModel : INotifyPropertyChanged
{
    private bool _isBusy;

    public bool IsBusy
    {
        set { SetProperty(ref _isBusy, value); }
    }

    public event PropertyChangedEventHandler PropertyChanged;

    protected void OnPropertyChanged([CallerMemberName] string propertyName = "")
    {
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
    }

    protected void SetProperty<T>(ref T backingField, T value, [CallerMemberName] string propertyName = "")
    {
        if (EqualityComparer<T>.Default.Equals(backingField, value))
            return;

        backingField = value;
        OnPropertyChanged(propertyName);
    }
}

```

- dentro da pasta Models, traga o modelo de dados Ex:
```
public class User
{
    public int Id { get; set; }
    public string Nome { get; set; }
}
```

- apos isso, novamente na pasta models, crie a classe BaseVM, onde adicionara ObservableCollection a model para ter um hotreload dos dados Ex:
```
public class BaseVM : BaseViewModel
{
    // a diferença entre uma lista qualquer e o observable collection é que a observable collection tem hotreload
    public ObservableCollection<User> Usuarios { get; set; } = new ObservableCollection<User>();
    }
```

-  na pasta Services, crie uma classe chamada ApiService, ali você controla os caminhos, metodos da api e respontas Ex:
```
public static class ApiService<T> where T : class
{
    public static HttpClient client = new HttpClient
    {
        BaseAddress = new Uri("http://10.0.2.2:5500/api/")
    };

    public static async Task<List<T>> GetList(string url)
    {
        var response = await client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        var content = await response.Content.ReadAsStringAsync();
        var json = JsonConvert.DeserializeObject<T[]>(content);
        return json.ToList();
    }
}
```

- depois de tudo, configure a classe MainPage para fazer binding, e carregar os dados da api Ex:
```
public partial class MainPage : ContentPage
{
    BaseVM vm = new BaseVM();
    public MainPage()
    {
        InitializeComponent();
        BindingContext = vm;
    }

    protected override void OnAppearing()
    {
        base.OnAppearing();
        var lista = await ApiService<User>.GetList("usuarios");
        foreach (var user in lista)
        {
            vm.Usuarios.Add(user);
        }
    }
}
```

- e entao na MainPage.xaml use o binding Ex:
```
<StackLayout>
    <Label Text="Usuarios" VerticalOptions="CenterAndExpand" HorizontalOptions="CenterAndExpand" />

    <CollectionView
        ItemsSource="{Binding Usuarios}"
        >
        <CollectionView.ItemTemplate>
            <DataTemplate>
                <Label Text="{Binding Nome}" />
            </DataTemplate>
        </CollectionView.ItemTemplate>
    </CollectionView>
</StackLayout>
```

