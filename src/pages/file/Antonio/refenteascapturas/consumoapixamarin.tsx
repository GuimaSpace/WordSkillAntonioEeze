import Image from 'next/image'
import Link from 'next/link'


export default function consumiapi() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Consumo API com Xamarin Forms:</span>
                <span>
                <>
  <hr />
  <p>
    <a href="http://10.0.2.2:5500">http://10.0.2.2:5500</a> ={" "}
    <a href="http://localhost:5500">http://localhost:5500</a>
    Não esqueça de na api ir em Project -&gt; Properties -&gt; Web e mudar a
    porta Não esqueça de adicionar o NewtonSoft.json ao ApiServices Não esqueça
    de permitir o uso de api no adroid.manifest usando Ex:
  </p>
  <pre>
    <code>
      <span className="hljs-symbol">android:</span>usesCleartextTraffic=
      <span className="hljs-string">"true"</span>
      {"\n"}
    </code>
  </pre>
  <ul>
    <li>
      <p>
        para o primeiro passo, criar a api, criar um projeto ASP.NET Web
        Application (.NET Framework), com modelo Web API sem a configuração para
        HTTPS
      </p>
    </li>
    <li>
      <p>
        após criar o app, va para Web.config e configure os handlers dentro do
        system.webServer da seguinte maneira
      </p>
      <pre>
        <code>
          &lt;system.webServer&gt;{"\n"}
          {"  "}&lt;handlers&gt;{"\n"}
          {"    "}&lt;remove name=
          <span className="hljs-string">
            "ExtensionlessUrlHandler-Integrated-4.0"
          </span>{" "}
          /&gt;{"\n"}
          {"    "}&lt;remove name=
          <span className="hljs-string">"OPTIONSVerbHandler"</span> /&gt;{"\n"}
          {"    "}&lt;remove name=
          <span className="hljs-string">"TRACEVerbHandler"</span> /&gt;{"\n"}
          {"    "}&lt;add name=
          <span className="hljs-string">
            "ExtensionlessUrlHandler-Integrated-4.0"
          </span>{" "}
          path=<span className="hljs-string">"*."</span> verb=
          <span className="hljs-string">"*"</span> type=
          <span className="hljs-string">
            "System.Web.Handlers.TransferRequestHandler"
          </span>{" "}
          preCondition=
          <span className="hljs-string">
            "integratedMode,runtimeVersionv4.0"
          </span>{" "}
          /&gt;{"\n"}
          {"  "}&lt;/handlers&gt;{"\n"}&lt;/system.webServer&gt;{"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        Configure o WebApiConfig dentro do App_Start da seguinte maneira,
        adicione formatação em json, ignore null, e ignore loops, após isso
        remova a função de xml Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">static</span>{" "}
          <span className="hljs-keyword">class</span> WebApiConfig{"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">static</span>{" "}
          <span className="hljs-keyword">void</span> Register(HttpConfiguration{" "}
          <span className="hljs-built_in">config</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-comment">
            // Configuração e serviços de API Web
          </span>
          {"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-comment">// Rotas de API Web</span>
          {"\n"}
          {"      "}
          <span className="hljs-built_in">config</span>
          .MapHttpAttributeRoutes();{"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-built_in">config</span>.Routes.MapHttpRoute(
          {"\n"}
          {"      "}name: <span className="hljs-string">"DefaultApi"</span>,
          {"\n"}
          {"      "}routeTemplate:{" "}
          <span className="hljs-string">
            "api/{"{"}controller{"}"}/{"{"}id{"}"}"
          </span>
          ,{"\n"}
          {"      "}defaults: <span className="hljs-keyword">new</span> {"{"} id
          = RouteParameter.Optional {"}"}
          {"\n"}
          {"      "});{"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-built_in">config</span>
          .Formatters.JsonFormatter.SerializerSettings.NullValueHandling =
          Newtonsoft.Json.NullValueHandling.Ignore;{"\n"}
          {"      "}
          <span className="hljs-built_in">config</span>
          .Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling =
          Newtonsoft.Json.ReferenceLoopHandling.Ignore;{"\n"}
          {"      "}
          <span className="hljs-built_in">config</span>.Formatters.Remove(
          <span className="hljs-built_in">config</span>
          .Formatters.XmlFormatter);{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        na pasta models, será adicionado seus dados, foi criado uma "model" de
        exemplo Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">class</span>{" "}
          <span className="hljs-title">User</span>
          {"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">int</span> Id {"{"}{" "}
          <span className="hljs-keyword">get</span>;{" "}
          <span className="hljs-keyword">set</span>; {"}"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">string</span> Nome {"{"}{" "}
          <span className="hljs-keyword">get</span>;{" "}
          <span className="hljs-keyword">set</span>; {"}"}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        após tudo isso, você criara um controller dentro da pasta Controllers,
        onde basicamente terá os metódods da API, lá você criara o prefixo de
        roda, os metodos como GET, que retorna os dados caso esteja tudo ok, e
        que retorne erro caso de errado utilizando o metodo try e catch Ex:
      </p>
      <pre>
        <code>
          [<span className="hljs-name">RoutePrefix</span>(
          <span className="hljs-string">"api/usuarios"</span>)]{"\n"}public
          class UsuariosController : ApiController{"\n"}
          {"{"}
          {"\n"}
          {"  "}[<span className="hljs-name">HttpGet</span>]{"\n"}
          {"  "}public IHttpActionResult Get(){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}try{"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}User user1 = new User()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}User user2 = new User()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}User user3 = new User()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"          "}user1.Nome ={" "}
          <span className="hljs-string">"Tonho"</span>
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}user2.Nome = <span className="hljs-string">"Dev"</span>
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}user3.Nome ={" "}
          <span className="hljs-string">"Macaco"</span>
          <span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"          "}var lista = new List&lt;User&gt;()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}lista.Add(<span className="hljs-name">user1</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}lista.Add(<span className="hljs-name">user2</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}lista.Add(<span className="hljs-name">user3</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"          "}return Ok(<span className="hljs-name">lista</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"      "}catch (<span className="hljs-name">Exception</span> ex)
          {"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}return BadRequest(
          <span className="hljs-name">ex.ToString</span>())
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}throw<span className="hljs-comment">;</span>
          {"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        também é importante ativar a visualização de pastas ocultas, ir a pasta
        da sua api -&gt; vs (pasta oculta) -&gt; "nome do projeto" -&gt; config
        e abra applicationhost.config pesquise por sites e logo abaixo do
        localhost, adicione o localhost em numeros Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-tag">
            &lt;<span className="hljs-name">bindings</span>&gt;
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-tag">
            &lt;<span className="hljs-name">binding</span>{" "}
            <span className="hljs-attr">protocol</span>=
            <span className="hljs-string">"http"</span>{" "}
            <span className="hljs-attr">bindingInformation</span>=
            <span className="hljs-string">"*:5500:localhost"</span> /&gt;
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-tag">
            &lt;<span className="hljs-name">binding</span>{" "}
            <span className="hljs-attr">protocol</span>=
            <span className="hljs-string">"http"</span>{" "}
            <span className="hljs-attr">bindingInformation</span>=
            <span className="hljs-string">"*:5500:127.0.0.1"</span> /&gt;
          </span>
          {"\n"}
          <span className="hljs-tag">
            &lt;/<span className="hljs-name">bindings</span>&gt;
          </span>
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        apos toda essa configuração da api, vamos para o consumo dela criando
        uma aplicação movel xamarin forms, crie no app base as pastas "Models",
        "Services", "ViewModels"
      </p>
    </li>
    <li>
      <p>
        dentro da pasta ViewModels cria uma class chamada BaseViewModels, lá
        você ira configurar a "troca de dados", lá transformara a BaseViewModel
        parte do INotifyPropertyChanged, uma variavel privada isBusy, que tera
        um modificador IsBusy que funciona a partir do SetProperty, com mais
        funções que verificao, e fazem e trazem dados Ex: ``` public class
        BaseViewModel : INotifyPropertyChanged
        {"{"}
        private bool _isBusy;
      </p>
      <p>
        {" "}
        public bool IsBusy
        {"{"}
      </p>
      <pre>
        <code>
          {"  "}
          <span className="hljs-keyword">set</span> {"{"} SetProperty(
          <span className="hljs-keyword">ref</span> _isBusy,{" "}
          <span className="hljs-keyword">value</span>); {"}"}
          {"\n"}
        </code>
      </pre>
      <p> {"}"}</p>
      <p> public event PropertyChangedEventHandler PropertyChanged;</p>
      <p>
        {" "}
        protected void OnPropertyChanged([CallerMemberName] string propertyName
        = "")
        {"{"}
      </p>
      <pre>
        <code>
          {"  "}PropertyChanged?.Invoke(
          <span className="hljs-built_in">this</span>,{" "}
          <span className="hljs-keyword">new</span>{" "}
          <span className="hljs-type">PropertyChangedEventArgs</span>
          (propertyName));{"\n"}
        </code>
      </pre>
      <p> {"}"}</p>
      <p>
        {" "}
        protected void SetProperty
          (ref T backingField, T value, [CallerMemberName] string propertyName =
          "")
          {"{"}
      </p>
      <pre>
        <code>
          {"  "}if (<span className="hljs-name">EqualityComparer&lt;T&gt;</span>
          .Default.Equals(<span className="hljs-name">backingField</span>,
          value)){"\n"}
          {"      "}return<span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"  "}backingField = value<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}OnPropertyChanged(
          <span className="hljs-name">propertyName</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
        </code>
      </pre>
      <p>
        {" "}
        {"}"}
        {"}"}
      </p>
    </li>
  </ul>
  <pre>
    <code>
      {"\n"}- dentro da pasta Models, traga o modelo{" "}
      <span className="hljs-keyword">de</span> dados{" "}
      <span className="hljs-keyword">Ex</span>:{"\n"}
    </code>
  </pre>
  <p>
    public class User
    {"{"}
    public int Id {"{"} get; set; {"}"}
    public string Nome {"{"} get; set; {"}"}
    {"}"}
  </p>
  <pre>
    <code>
      {"\n"}- apos isso, novamente na pasta models, crie{" "}
      <span className="hljs-selector-tag">a</span> classe BaseVM, onde
      adicionara ObservableCollection{" "}
      <span className="hljs-selector-tag">a</span> model para ter um hotreload
      dos dados Ex:{"\n"}
    </code>
  </pre>
  <p>
    public class BaseVM : BaseViewModel
    {"{"}
    // a diferença entre uma lista qualquer e o observable collection é que a
    observable collection tem hotreload public ObservableCollection
      {" "}
      Usuarios {"{"} get; set; {"}"} = new ObservableCollection
        ();
        {"}"}
  </p>
  <pre>
    <code>
      {"\n"}
      <span className="hljs-bullet">-{"  "}</span>na pasta Services, crie uma
      classe chamada ApiService, ali você controla os caminhos, metodos da api e
      respontas Ex:{"\n"}
    </code>
  </pre>
  <p>
    public static class ApiService

      {" "}
      where T : class
      {"{"}
      public static HttpClient client = new HttpClient
      {"{"}
      BaseAddress = new Uri("
      <a href="http://10.0.2.2:5500/api/">http://10.0.2.2:5500/api/</a>")
      {"}"};

  </p>
  <pre>
    <code>
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-keyword">async</span> Task&lt;List&lt;T&gt;&gt;
      GetList(<span className="hljs-keyword">string</span> url){"\n"}
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">var</span> response ={" "}
      <span className="hljs-keyword">await</span> client.GetAsync(url);{"\n"}
      {"    "}response.EnsureSuccessStatusCode();{"\n"}
      {"    "}
      <span className="hljs-keyword">var</span> content ={" "}
      <span className="hljs-keyword">await</span>{" "}
      response.Content.ReadAsStringAsync();{"\n"}
      {"    "}
      <span className="hljs-keyword">var</span> json =
      JsonConvert.DeserializeObject&lt;T[]&gt;(content);{"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> json.ToList();{"\n"}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>{"}"}</p>
  <pre>
    <code>
      {"\n"}- depois <span className="hljs-keyword">de</span> tudo, configure a
      classe MainPage para fazer binding,{" "}
      <span className="hljs-keyword">e</span> carregar os dados da api{" "}
      <span className="hljs-keyword">Ex</span>:{"\n"}
    </code>
  </pre>
  <p>
    public partial class MainPage : ContentPage
    {"{"}
    BaseVM vm = new BaseVM(); public MainPage()
    {"{"}
    InitializeComponent(); BindingContext = vm;
    {"}"}
  </p>
  <pre>
    <code>
      <span className="hljs-function">
        <span className="hljs-keyword">protected</span>{" "}
        <span className="hljs-keyword">override</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">OnAppearing</span>(
        <span className="hljs-params" />){"\n"}
      </span>
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">base</span>.OnAppearing();{"\n"}
      {"    "}
      <span className="hljs-keyword">var</span> lista ={" "}
      <span className="hljs-keyword">await</span>{" "}
      ApiService&lt;User&gt;.GetList(
      <span className="hljs-string">"usuarios"</span>);{"\n"}
      {"    "}
      <span className="hljs-keyword">foreach</span> (
      <span className="hljs-keyword">var</span> user{" "}
      <span className="hljs-keyword">in</span> lista){"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}vm.Usuarios.Add(user);{"\n"}
      {"    "}
      {"}"}
      {"\n"}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>{"}"}</p>
  <pre>
    <code>
      {"\n"}- <span className="hljs-keyword">e</span> entao na MainPage.xaml{" "}
      <span className="hljs-keyword">use</span> o binding{" "}
      <span className="hljs-keyword">Ex</span>:{"\n"}
    </code>
  </pre>
  <p>
    <stacklayout>
      <label
        text="Usuarios"
        verticaloptions="CenterAndExpand"
        horizontaloptions="CenterAndExpand"
      />
    </stacklayout>
  </p>
  <pre>
    <code>
      <span className="xml">
        <span className="hljs-tag">
          &lt;<span className="hljs-name">CollectionView</span>
          {"\n"}
          {"    "}
          <span className="hljs-attr">ItemsSource</span>=
          <span className="hljs-string">"</span>
        </span>
      </span>
      <span className="hljs-template-variable">
        {"{"}Binding Usuarios{"}"}
      </span>
      <span className="xml">
        <span className="hljs-tag">
          <span className="hljs-string">"</span>
          {"\n"}
          {"    "}&gt;
        </span>
        {"\n"}
        {"    "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">CollectionView.ItemTemplate</span>&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">DataTemplate</span>&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Label</span>{" "}
          <span className="hljs-attr">Text</span>=
          <span className="hljs-string">"</span>
        </span>
      </span>
      <span className="hljs-template-variable">
        {"{"}Binding Nome{"}"}
      </span>
      <span className="xml">
        <span className="hljs-tag">
          <span className="hljs-string">"</span> /&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">DataTemplate</span>&gt;
        </span>
        {"\n"}
        {"    "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">CollectionView.ItemTemplate</span>
          &gt;
        </span>
        {"\n"}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">CollectionView</span>&gt;
        </span>
      </span>
      {"\n"}
    </code>
  </pre>
  <p>```</p>
</>

                </span>
            </div>
        </div>
    )
}
