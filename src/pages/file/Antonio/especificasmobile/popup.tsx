import Image from 'next/image'
import Link from 'next/link'


export default function Detailpopup() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Detail popup:</span>
                <span>
                <>
  <hr />
  <p>
    Sobre o detail popup, eu quero criar um botão na navegação,que ao clicar,
    mostre as informações do app, crie uma contentPage, dentro dela, acima do
    stacklayout, adicione um contentPage.ToolbarItems, dentro adicione um
    ToolBarItem com icone e uma função Clicked Ex:
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
        <span className="hljs-string">"mobiletesteprova.MainPageDetail"</span>
        {"\n"}
        {"             "}
        <span className="hljs-attr">Title</span>=
        <span className="hljs-string">"Detail"</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">ContentPage.ToolbarItems</span>&gt;
      </span>
      {"\n"}
      {"        "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">ToolbarItem</span>{" "}
        <span className="hljs-attr">IconImageSource</span>=
        <span className="hljs-string">"info"</span>{" "}
        <span className="hljs-attr">Clicked</span>=
        <span className="hljs-string">"ToolbarItem_Clicked"</span>/&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">ContentPage.ToolbarItems</span>&gt;
      </span>
      {"\n"}
      {"  "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">StackLayout</span>{" "}
        <span className="hljs-attr">Padding</span>=
        <span className="hljs-string">"20"</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">StackLayout</span>&gt;
      </span>
      {"\n"}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">ContentPage</span>&gt;
      </span>
      {"\n"}
    </code>
  </pre>
  <p>
    No seu .cs faça com que ao clicar no botão ele mostre um alerta com o texto
    desejado Ex:
  </p>
  <pre>
    <code>
      {"    "}[XamlCompilation(XamlCompilationOptions.Compile)]{"\n"}
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">partial</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">MainPageDetail</span> :{" "}
      <span className="hljs-title">ContentPage</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">MainPageDetail</span>(
        <span className="hljs-params" />){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}InitializeComponent();{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">async</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">ToolbarItem_Clicked</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">await</span> DisplayAlert(
      <span className="hljs-string">"Informação"</span>,{" "}
      <span className="hljs-string">
        "V1.0.0 Desenvolvido por &lt;TonhoDev&gt; &lt;SP&gt; WSA 2021."
      </span>
      , <span className="hljs-string">"OK"</span>);{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    após isso, só adicionar a pagina desejada Ex(esse exemplo também inclui o
    flyout):
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
        &lt;<span className="hljs-name">FlyoutPage</span>{" "}
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
        <span className="hljs-string">"mobiletesteprova.MainPage"</span>
        {"\n"}
        {"             "}
        <span className="hljs-attr">xmlns:pages</span>=
        <span className="hljs-string">"clr-namespace:mobiletesteprova"</span>
        {"\n"}
        {"            "}
        <span className="hljs-attr">NavigationPage.HasNavigationBar</span>=
        <span className="hljs-string">"False"</span>&gt;
      </span>
      {"\n"}
      {"  "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">FlyoutPage.Flyout</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">pages:MainPageFlyout</span>{" "}
        <span className="hljs-attr">x:Name</span>=
        <span className="hljs-string">"FlyoutPage"</span> /&gt;
      </span>
      {"\n"}
      {"  "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">FlyoutPage.Flyout</span>&gt;
      </span>
      {"\n"}
      {"  "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">FlyoutPage.Detail</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">NavigationPage</span>&gt;
      </span>
      {"\n"}
      {"      "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">x:Arguments</span>&gt;
      </span>
      {"\n"}
      {"        "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">pages:MainPageDetail</span> /&gt;
      </span>
      {"\n"}
      {"      "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">x:Arguments</span>&gt;
      </span>
      {"\n"}
      {"    "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">NavigationPage</span>&gt;
      </span>
      {"\n"}
      {"  "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">FlyoutPage.Detail</span>&gt;
      </span>
      {"\n"}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">FlyoutPage</span>&gt;
      </span>
      {"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}