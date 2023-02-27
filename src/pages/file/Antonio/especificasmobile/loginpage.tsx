import Image from 'next/image'
import Link from 'next/link'


export default function PaginadeLogin() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Página de Login:</span>
                <span>
                <>
  <hr />
  <p>
    !Esse login tem verificação, se vc errar 3 vezes ele bloqueia por 30
    segundos !Não esquece de copiar e colar as models da sua api em uma pasta
    models do seu projeto xamarin para fazer a pagina login no xamarin é preciso
    fazer toda a configuração de api, e ter um método post no service, depois
    crie uma página de conteudo, apague o que está dentro do stackLayout, e
    dentro coloque duas entry, como email e senha, adicione um name nelas para
    serem manipuladas e um placeholder, após isso, adicione um botão, também de
    nome a ele, e coloque uma função clicked Ex:
  </p>
  <pre>
    <code>
      <span className="php">
        <span className="hljs-meta">&lt;?</span>xml version=
        <span className="hljs-string">"1.0"</span> encoding=
        <span className="hljs-string">"utf-8"</span>{" "}
        <span className="hljs-meta">?&gt;</span>
      </span>
      {"\n"}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">ContentPage</span>{" "}
        <span className="hljs-attr">xmlns</span>=
        <span className="hljs-string">
          "http://xamarin.com/schemas/2014/forms"
        </span>
        {"\n"}
        {"             "}
        <span className="hljs-attr">xmlns:x</span>=
        <span className="hljs-string">
          "http://schemas.microsoft.com/winfx/2009/xaml"
        </span>
        {"\n"}
        {"             "}
        <span className="hljs-attr">x:Class</span>=
        <span className="hljs-string">"limaApp.LoginPage"</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">ContentPage.Content</span>&gt;
      </span>
      {"\n"}
      {"        "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">StackLayout</span>{" "}
        <span className="hljs-attr">Padding</span>=
        <span className="hljs-string">"30"</span>{" "}
        <span className="hljs-attr">VerticalOptions</span>=
        <span className="hljs-string">"CenterAndExpand"</span>&gt;
      </span>
      {"\n"}
      {"            "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">Label</span>{" "}
        <span className="hljs-attr">HorizontalOptions</span>=
        <span className="hljs-string">"CenterAndExpand"</span>{" "}
        <span className="hljs-attr">Text</span>=
        <span className="hljs-string">"Acessar"</span>&gt;
      </span>
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">Label</span>&gt;
      </span>
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">Entry</span>{" "}
        <span className="hljs-attr">x:Name</span>=
        <span className="hljs-string">"user"</span>{" "}
        <span className="hljs-attr">Placeholder</span>=
        <span className="hljs-string">"Usuario"</span>/&gt;
      </span>
      {"\n"}
      {"            "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">Entry</span>{" "}
        <span className="hljs-attr">x:Name</span>=
        <span className="hljs-string">"senha"</span>{" "}
        <span className="hljs-attr">Placeholder</span>=
        <span className="hljs-string">"Senha"</span>{" "}
        <span className="hljs-attr">IsPassword</span>=
        <span className="hljs-string">"true"</span>/&gt;
      </span>
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">Button</span>{" "}
        <span className="hljs-attr">x:Name</span>=
        <span className="hljs-string">"btnLogin"</span>{" "}
        <span className="hljs-attr">Clicked</span>=
        <span className="hljs-string">"btnLogin_Clicked"</span>{" "}
        <span className="hljs-attr">Text</span>=
        <span className="hljs-string">"Login"</span>/&gt;
      </span>
      {"\n"}
      {"        "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">StackLayout</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">ContentPage.Content</span>&gt;
      </span>
      {"\n"}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">ContentPage</span>&gt;
      </span>
      {"\n"}
    </code>
  </pre>
  <p>Crie uma classe Dados que irá guardar o usuario logado Ex:</p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-class">
        <span className="hljs-keyword">class</span>{" "}
        <span className="hljs-title">Dados</span>
        {"\n"}
        {"    "}
      </span>
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span> Usuario logado{"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    va para a loginpage.cs, lá existe a função do botão clicado, criamos um novo
    objeto da tabela Usuarios no caso, defina que o email e senha do usuario são
    iguais ao texto do xml, entrege o usuario para o service de post, crie uma
    variavel auxiliar que registra quantas vezes ele tentou logar, se chegar a 3
    ele bloqueia por 30 segundos e reseta, após o login ser bem sucedio ele seta
    os dados, e passa de página Ex:
  </p>
  <pre>
    <code>
      {" "}
      [XamlCompilation(XamlCompilationOptions.Compile)]{"\n"}
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">partial</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">LoginPage</span> :{" "}
      <span className="hljs-title">ContentPage</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">int</span> count ={" "}
      <span className="hljs-number">0</span>;{"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">LoginPage</span>(
        <span className="hljs-params" />){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}InitializeComponent();{"\n"}
      {"            "}
      <span className="hljs-comment">
        //user.Text = "maiconsantana@gmail.com";
      </span>
      {"\n"}
      {"            "}
      <span className="hljs-comment">//senha.Text = "maicon55";</span>
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">async</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">btnLogin_Clicked</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}Usuario usuario ={" "}
      <span className="hljs-keyword">new</span> Usuario();{"\n"}
      {"            "}usuario.email = user.Text;{"\n"}
      {"            "}usuario.senha = senha.Text;{"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> user1 ={" "}
      <span className="hljs-keyword">await</span>{" "}
      ApiService&lt;Usuario&gt;.PostWithReturn(
      <span className="hljs-string">"login"</span>, usuario);{"\n"}
      {"            "}
      <span className="hljs-keyword">if</span> (user1 =={" "}
      <span className="hljs-literal">null</span>){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}count++;{"\n"}
      {"                "}
      <span className="hljs-comment">// Toast</span>
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (count &lt;{" "}
      <span className="hljs-number">3</span>){"\n"}
      {"                "}
      <span className="hljs-keyword">await</span> DisplayAlert(
      <span className="hljs-string">"Alerta"</span>,{" "}
      <span className="hljs-string">"Usuario/Senha inválidos"</span>,{" "}
      <span className="hljs-string">"Ok"</span>);{"\n"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (count =={" "}
      <span className="hljs-number">3</span>){"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">await</span> DisplayAlert(
      <span className="hljs-string">"Alerta"</span>,{" "}
      <span className="hljs-string">"Login bloqueado: aguarde 30s"</span>,{" "}
      <span className="hljs-string">"Ok"</span>);{"\n"}
      {"                    "}btnLogin.IsEnabled ={" "}
      <span className="hljs-literal">false</span>;{"\n"}
      {"                    "}user.IsEnabled ={" "}
      <span className="hljs-literal">false</span>;{"\n"}
      {"                    "}senha.IsEnabled ={" "}
      <span className="hljs-literal">false</span>;{"\n"}
      {"                    "}
      <span className="hljs-keyword">await</span> Task.Delay(
      <span className="hljs-number">30000</span>);{"\n"}
      {"\n"}
      {"                    "}btnLogin.IsEnabled ={" "}
      <span className="hljs-literal">true</span>;{"\n"}
      {"                    "}user.IsEnabled ={" "}
      <span className="hljs-literal">true</span>;{"\n"}
      {"                    "}senha.IsEnabled ={" "}
      <span className="hljs-literal">true</span>;{"\n"}
      {"                    "}count = <span className="hljs-number">0</span>;
      {"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}count = <span className="hljs-number">0</span>;{"\n"}
      {"            "}Dados.logado= user1;{"\n"}
      {"            "}App.Current.MainPage ={"  "}
      <span className="hljs-keyword">new</span> NavigationPage(
      <span className="hljs-keyword">new</span> MainPage());{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    após logar, é possivel fazer um botão que faça voltar para a pagina de
    login, basta criar um botão com o nome de sair no seu xaml, e no cs
    adicionar Ex:
  </p>
  <pre>
    <code>
      {"                    "}App.Current.MainPage ={" "}
      <span className="hljs-keyword">new</span>{" "}
      <span className="hljs-type">LoginPage</span>();{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}