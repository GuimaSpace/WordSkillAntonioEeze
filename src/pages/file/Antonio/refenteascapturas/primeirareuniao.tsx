import Image from 'next/image'
import Link from 'next/link'


export default function primeirareuniao() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Primeira Reunião Explicativa:</span>
                <span>
                <>
  <hr />
  <h2 id="desktop">Desktop</h2>
  <ul>
    <li>
      <p>Vá ao banco</p>
    </li>
    <li>
      <p>
        Clique com o botão direito, e então -&gt; Tarefas/Tasks -&gt; Importar
        Dados/Import Data
      </p>
    </li>
    <li>
      <p>Selecione como Fonte de Dados o Microsoft Excel</p>
    </li>
    <li>
      <p>
        Escolher a Versão do Excel 97-2003 (Então o seu arquivo Excel também
        deve estar salvo nessa versão)
      </p>
    </li>
    <li>
      <p>Selecionar o arquivo -&gt; Next</p>
    </li>
    <li>
      <p>
        Após isso, Escolha para onde o arquivo será enviado, que será para "SQL
        Server Native Client 11.0", E escolha o Banco de dados que deseja
        importar os dados -&gt; Next
      </p>
    </li>
    <li>
      <p>
        Selecionar as tabelas a serem insertadas, edita-las -&gt; Next -&gt;
        Next e pronto
      </p>
    </li>
    <li>
      <p>Criar um projeto Windows Forms(.Net Framework)</p>
    </li>
    <li>
      <p>
        ultilizar o windows forms para montar a tela, sempre respeitando os
        requisitos da prova
      </p>
    </li>
    <li>
      <p>
        após isso, para fazer a conexão da aplicação com o banco de dados é
        necessario clicar com botar direito no projeto base -&gt; adicionar
        item, Dados(Na aba lateral) -&gt; ADO.NET Entity Data Model -&gt; EF
        Designer from database -&gt; new connection -&gt; Microsoft SQL Server
        -&gt; Nome do servidor: .\sqlexpress -&gt; Selecionar o banco de dados
        -&gt; Ok -&gt; Next -&gt; Next -&gt; Selecionar as tabelas a adicionar
        -&gt; Concluir
      </p>
    </li>
    <li>
      <p>
        Para visualizar o nome do contexto da sua model, va para App.config e
        ele estara dentro da connectionString
      </p>
    </li>
    <li>
      <p>
        Para adicionar dados da tabela em um comboBox, coloque na função Load
        -&gt;{" "}
      </p>
      <pre>
        <code>
          comBox.Itens.AddRange(ctx.Tabela.Select(
          <span className="hljs-function">
            <span className="hljs-params">x</span> =&gt;
          </span>{" "}
          x.ColunaDesejada).ToArray());{"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        para coletar os dados dos campos criados e inserir no banco de dados,
        basta criar um Nova variável do Objeto tabela Ex:{" "}
      </p>
      <pre>
        <code>
          <span className="hljs-attribute">Usuarios{"  "}novoUsuario</span>
          {"  "}= new Usuarios();{"\n"}
        </code>
      </pre>
    </li>
  </ul>
  <p>-Coletando os dados dos campos Ex:</p>
  <pre>
    <code>
      novoUsuario.Email = txtEmail<span className="hljs-meta">.Text</span>
      <span className="hljs-comment">;</span>
      {"\n"}novoUsuario.timeFavorito = comboTime.SelectedItem.ToString()
      <span className="hljs-comment">;</span>
      {"\n"}novoUsuario.nascimento = dateNascimento.Value
      <span className="hljs-comment">;</span>
      {"\n"}
    </code>
  </pre>
  <p>
    -após isso o basta add essa nova variavel/"Objeto" ao contexto e salvar
    alterações Ex:
  </p>
  <pre>
    <code>
      <span className="hljs-selector-tag">ctx</span>
      <span className="hljs-selector-class">.Usuarios</span>
      <span className="hljs-selector-class">.Add</span>(
      <span className="hljs-selector-tag">novoUsuario</span>);{"\n"}
      <span className="hljs-selector-tag">ctx</span>
      <span className="hljs-selector-class">.SaveChanges</span>();{"\n"}
    </code>
  </pre>
  <ul>
    <li>
      <p>
        para fazer uma validação se o usuario não está cadastrado no banco, é só
        fazer uma busca no banco de dados e colocar caso uma condição que caso a
        busca não trazer o resultado vazio ele bloqueia a ação, emite uma
        mensagem e retorna Ex:
      </p>
      <pre>
        <code>
          Usuarios usuario = ctx.Usuarios.Where(
          <span className="hljs-keyword">user</span>{" "}
          <span className="hljs-title">=&gt; user</span>.Email ==
          txtEmail.Text).FirstOrDefault();{"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>para fazer a verificação emitir mensagem e retornar Ex:</p>
      <pre>
        <code>
          <span className="hljs-keyword">if</span> (usuario !={" "}
          <span className="hljs-literal">null</span>){"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-string">"O email ja foi cadastrado"</span>
          .Alert();{"\n"}
          {"  "}
          <span className="hljs-keyword">return</span>;{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
  </ul>
  <h2 id="mobile">Mobile</h2>
  <ul>
    <li>
      <p>
        Criar um projeto Mobile App(Xamarin.Forms), selecionar projeto em banco
        e apenas para desenvolver para Android
      </p>
    </li>
    <li>
      <p>
        abra a pasta Resources -&gt; drawable e lá adicione as imagens
        necessárias
      </p>
    </li>
    <li>
      <p>
        para criar um sistema de Splash Screen que dure 3 segundos e após isso
        ir para outra pagina, basta fazer o seguinte, clique na projeto base
        -&gt; Add New Item -&gt; na aba lateral selecione Xamarin Forms -&gt;
        Content Page, e de o nome de Splash após isso, apague tudo que está
        dentro do StackLayout e adicione a imagem que quer na splash screen ao
        centro, também remova a barra de navegação nas atribuições em cima Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-tag">
            &lt;<span className="hljs-name">ContentPage</span>{" "}
            <span className="hljs-attr">xmlns</span>=
            <span className="hljs-string">
              "http://xamarin.com/schemas/2014/forms"
            </span>
            {"\n"}
            {"           "}
            <span className="hljs-attr">xmlns:x</span>=
            <span className="hljs-string">
              "http://schemas.microsoft.com/winfx/2009/xaml"
            </span>
            {"\n"}
            {"           "}
            <span className="hljs-attr">x:Class</span>=
            <span className="hljs-string">"mobiletesteprova.SplashScreen"</span>{" "}
            {"\n"}
            {"           "}
            <span className="hljs-attr">NavigationPage.HasNavigationBar</span>=
            <span className="hljs-string">"False"</span>&gt;
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-tag">
            &lt;<span className="hljs-name">ContentPage.Content</span>&gt;
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-tag">
            &lt;<span className="hljs-name">StackLayout</span>&gt;
          </span>
          {"\n"}
          {"      "}
          <span className="hljs-tag">
            &lt;<span className="hljs-name">Image</span>{" "}
            <span className="hljs-attr">Source</span>=
            <span className="hljs-string">"Logo"</span>{" "}
            <span className="hljs-attr">VerticalOptions</span>=
            <span className="hljs-string">"CenterAndExpand"</span>
            {"       "}
            <span className="hljs-attr">HorizontalOptions</span>=
            <span className="hljs-string">"CenterAndExpand"</span>/&gt;
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-tag">
            &lt;/<span className="hljs-name">StackLayout</span>&gt;
          </span>
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        apos isso vá ao .cs da página e adicione uma função async que após 3
        segundos faça ela navegar/transformar em outra pagina Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">protected</span>{" "}
            <span className="hljs-keyword">async</span>{" "}
            <span className="hljs-keyword">override</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">OnAppearing</span>(
            <span className="hljs-params" />){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">base</span>.OnAppearing();{"\n"}
          {"  "}
          <span className="hljs-keyword">await</span> Task.Delay(
          <span className="hljs-number">3000</span>);{"\n"}
          {"  "}
          <span className="hljs-keyword">await</span> Navigation.PushAsync(
          <span className="hljs-keyword">new</span> MainPage());{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        para a aplicação abrir diretamente na Splash Screen você precia
        congigurar como será a inicialização no App.xaml.cs Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">public</span> App(){"\n"}
          {"{"}
          {"\n"}
          {"  "}InitializeComponent();{"\n"}
          {"\n"}
          {"  "}MainPage = <span className="hljs-keyword">new</span>{" "}
          <span className="hljs-type">NavigationPage</span>(
          <span className="hljs-keyword">new</span>{" "}
          <span className="hljs-type">Splash</span>());{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        Para a MainPage (pagina qual a Splash ira direcionar), iremos adicionar
        um conteudo com titulo e texto centralizado, com margem para as bordas,
        e sem navegação
      </p>
    </li>
    <li>
      <p>
        para deixar a navegação desativada basta adicionar a content page isso:
      </p>
      <pre>
        <code>
          {"  "}NavigationPage.HasNavigationBar=
          <span className="hljs-string">"False"</span>
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>e sobre o texto centralizado com margem:</p>
      <pre>
        <code>
          {"  "}&lt;StackLayout Padding=
          <span className="hljs-string">"30"</span>&gt;{"\n"}
          {"      "}&lt;<span className="hljs-keyword">Label</span>{" "}
          HorizontalOptions=
          <span className="hljs-string">"CenterAndExpand"</span> Text=
          <span className="hljs-string">"O que fazemos!"</span>/&gt;{"\n"}
          {"      "}&lt;<span className="hljs-keyword">Label</span>{" "}
          HorizontalOptions=
          <span className="hljs-string">"CenterAndExpand"</span> Text="WS Towers
          é uma empresa <span className="hljs-keyword">que</span> deté
          <span className="hljs-keyword">m</span> direitos{" "}
          <span className="hljs-keyword">de</span> uso em{" "}
          <span className="hljs-keyword">est</span>ádios{" "}
          <span className="hljs-keyword">de</span> todo o país. Exemplos{" "}
          <span className="hljs-keyword">de</span> uso são: partidas{" "}
          <span className="hljs-keyword">de</span> futebol, shows, visitas etc.{" "}
          {"\n"}
          {"                  "}Por ser uma grande empresa a WS Tower també
          <span className="hljs-keyword">m</span> possui responsabilidade
          socioambiental. Desta <span className="hljs-keyword">forma</span>, a
          partir desse aplicativo android{"\n"}
          {"                  "}
          <span className="hljs-keyword">que</span> conta com a ajuda das pessoa
          ao redor <span className="hljs-keyword">do</span> país, para denunciar
          atentados contra o meio ambiente. "/&gt;{"\n"}
          {"\n"}
          {"  "}&lt;/StackLayout&gt;{"\n"}
        </code>
      </pre>
    </li>
  </ul>
</>

                </span>
            </div>
        </div>
    )
}