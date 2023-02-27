import Image from 'next/image'
import Link from 'next/link'


export default function Flyout() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Flyout:</span>
                <span>
                <>
  <hr />
  <p>
    para fazer um flyout/menu lateral, primeiro criamos uma classe, para definir
    as propriedades de seus itens Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">MainPageFlyoutMenuItem</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">MainPageFlyoutMenuItem</span>(
        <span className="hljs-params" />){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}TargetType = <span className="hljs-keyword">typeof</span>
      (MainPageFlyoutMenuItem);{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">int</span> Id {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">string</span> Title {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span> Type TargetType {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">bool</span> Enable {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    Após isso crie uma uma uma content page xaml, dentro do stacklayout crie uma
    listview, configure o basico da listview, nome, separador, e deifine por
    binding os items que ira conter, crie um header na listview, dentro do
    header, crie um stacklayout horizontal, que contenha o nome locado e email
    logado, seram definidos no .cs, após o header crie um ItemTemplate, dentro
    dele um dataTemplate, um viewCell, e dentro da viewcell um stacklayout, nele
    coloque o texto a ser definido por binding, e o enabled a ser definido por
    binding Ex:
  </p>
  <pre>
    <code>
      <span className="xml">
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
          <span className="hljs-string">"mobiletesteprova.MainPageFlyout"</span>
          {"\n"}
          {"             "}
          <span className="hljs-attr">Title</span>=
          <span className="hljs-string">"Flyout"</span>&gt;
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
          &lt;<span className="hljs-name">ListView</span>{" "}
          <span className="hljs-attr">x:Name</span>=
          <span className="hljs-string">"MenuItemsListView"</span>
          {"\n"}
          {"              "}
          <span className="hljs-attr">SeparatorVisibility</span>=
          <span className="hljs-string">"None"</span>
          {"\n"}
          {"              "}
          <span className="hljs-attr">HasUnevenRows</span>=
          <span className="hljs-string">"true"</span>
          {"\n"}
          {"              "}
          <span className="hljs-attr">ItemsSource</span>=
          <span className="hljs-string">"</span>
        </span>
      </span>
      <span className="hljs-template-variable">
        {"{"}Binding MenuItems{"}"}
      </span>
      <span className="xml">
        <span className="hljs-tag">
          <span className="hljs-string">"</span>&gt;
        </span>
        {"\n"}
        {"      "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">ListView.Header</span>&gt;
        </span>
        {"\n"}
        {"                "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">StackLayout</span>{" "}
          <span className="hljs-attr">Orientation</span>=
          <span className="hljs-string">"Horizontal"</span>&gt;
        </span>
        {"\n"}
        {"                    "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Label</span>{" "}
          <span className="hljs-attr">x:Name</span>=
          <span className="hljs-string">"nomeLogado"</span>/&gt;
        </span>
        {"\n"}
        {"                    "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Label</span>{" "}
          <span className="hljs-attr">x:Name</span>=
          <span className="hljs-string">"emailLogado"</span>/&gt;
        </span>
        {"\n"}
        {"                "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">StackLayout</span>&gt;
        </span>
        {"\n"}
        {"      "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ListView.Header</span>&gt;
        </span>
        {"\n"}
        {"      "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">ListView.ItemTemplate</span>&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">DataTemplate</span>&gt;
        </span>
        {"\n"}
        {"          "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">ViewCell</span>&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">StackLayout</span>{" "}
          <span className="hljs-attr">Padding</span>=
          <span className="hljs-string">"15,10"</span>{" "}
          <span className="hljs-attr">HorizontalOptions</span>=
          <span className="hljs-string">"FillAndExpand"</span>&gt;
        </span>
        {"\n"}
        {"              "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Label</span>{" "}
          <span className="hljs-attr">VerticalOptions</span>=
          <span className="hljs-string">"FillAndExpand"</span> {"\n"}
          {"                    "}
          <span className="hljs-attr">VerticalTextAlignment</span>=
          <span className="hljs-string">"Center"</span> {"\n"}
          {"                    "}
          <span className="hljs-attr">Text</span>=
          <span className="hljs-string">"</span>
        </span>
      </span>
      <span className="hljs-template-variable">
        {"{"}Binding Title{"}"}
      </span>
      <span className="xml">
        <span className="hljs-tag">
          <span className="hljs-string">"</span> {"\n"}
          {"                     "}
          <span className="hljs-attr">IsEnabled</span>=
          <span className="hljs-string">"</span>
        </span>
      </span>
      <span className="hljs-template-variable">
        {"{"}Binding Enable{"}"}
      </span>
      <span className="xml">
        <span className="hljs-tag">
          <span className="hljs-string">"</span>
          {"\n"}
          {"                    "}
          <span className="hljs-attr">FontSize</span>=
          <span className="hljs-string">"24"</span>/&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">StackLayout</span>&gt;
        </span>
        {"\n"}
        {"          "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ViewCell</span>&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">DataTemplate</span>&gt;
        </span>
        {"\n"}
        {"      "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ListView.ItemTemplate</span>&gt;
        </span>
        {"\n"}
        {"    "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ListView</span>&gt;
        </span>
        {"\n"}
        {"  "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">StackLayout</span>&gt;
        </span>
        {"\n"}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ContentPage</span>&gt;
        </span>
      </span>
      {"\n"}
    </code>
  </pre>
  <p>
    após isso, vá ao mainpageflyout.xaml.cs, lá dentro você cria uma public
    listview, agora, dentro de onde o componente é inicializado, crie um
    bindingContext como novo mainPageFlyoutModel, e faça a ListView ser igual ao
    MenuItemsListView, após isso crie um Onappearing, que tranforma os textos do
    front nomLogado e emailLogado no que está salvo em dados do usuario logado,
    depois crie uma classe dentro disso mesmo, chamada MainPageFlyoutViewModel,
    que dependa do INotifyPropertyChanged, e implemente-o, crie uma
    ObservableCollection do MainPageFlyoutMenuItem, com get, set, crie um public
    MainPageFlyoutViewModel após isso, diga que menuitems é igual a
    ObservableCollection, e crie os elementos da collection ali com aquelas
    propriedades citadas anteriormente Ex:
  </p>
  <pre>
    <code>
      {"    "}[XamlCompilation(XamlCompilationOptions.Compile)]{"\n"}
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">partial</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">MainPageFlyout</span> :{" "}
      <span className="hljs-title">ContentPage</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span> ListView ListView;{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">MainPageFlyout</span>(
        <span className="hljs-params" />){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}InitializeComponent();{"\n"}
      {"\n"}
      {"            "}BindingContext = <span className="hljs-keyword">new</span>{" "}
      MainPageFlyoutViewModel();{"\n"}
      {"            "}ListView = MenuItemsListView;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">protected</span>{" "}
        <span className="hljs-keyword">override</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">OnAppearing</span>(
        <span className="hljs-params" />){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">base</span>.OnAppearing();{"\n"}
      {"            "}nomeLogado.Text = Dados.logado.nome;{"\n"}
      {"            "}emailLogado.Text = Dados.logado.email;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">MainPageFlyoutViewModel</span> :{" "}
      <span className="hljs-title">INotifyPropertyChanged</span>
      {"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">public</span>{" "}
      ObservableCollection&lt;MainPageFlyoutMenuItem&gt; MenuItems {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"}
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">MainPageFlyoutViewModel</span>(
        <span className="hljs-params" />){"\n"}
        {"            "}
      </span>
      {"{"}
      {"\n"}
      {"                "}MenuItems = <span className="hljs-keyword">new</span>{" "}
      ObservableCollection&lt;MainPageFlyoutMenuItem&gt;(
      <span className="hljs-keyword">new</span>[]{"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">new</span> MainPageFlyoutMenuItem {"{"} Id
      = <span className="hljs-number">0</span>, Title ={" "}
      <span className="hljs-string">"Home"</span>, Enable={" "}
      <span className="hljs-literal">true</span> {"}"},{"\n"}
      {"                    "}
      <span className="hljs-keyword">new</span> MainPageFlyoutMenuItem {"{"} Id
      = <span className="hljs-number">1</span>, Title ={" "}
      <span className="hljs-string">"Reportar ação"</span>, TargetType ={" "}
      <span className="hljs-keyword">typeof</span>(CadastroRelato), Enable ={" "}
      <span className="hljs-literal">true</span>
      {"}"},{"\n"}
      {"                    "}
      <span className="hljs-keyword">new</span> MainPageFlyoutMenuItem {"{"} Id
      = <span className="hljs-number">2</span>, Title ={" "}
      <span className="hljs-string">"Visualizar"</span> , TargetType ={" "}
      <span className="hljs-keyword">typeof</span>(RelatosPage), Enable =
      Dados.logado.funcaoid == <span className="hljs-number">1</span> ?{" "}
      <span className="hljs-literal">true</span> :{" "}
      <span className="hljs-literal">false</span>
      {"}"},{"\n"}
      {"                    "}
      <span className="hljs-keyword">new</span> MainPageFlyoutMenuItem {"{"} Id
      = <span className="hljs-number">3</span>, Title ={" "}
      <span className="hljs-string">"Sair"</span>, Enable ={" "}
      <span className="hljs-literal">true</span>
      {"}"},{"\n"}
      {"                "}
      {"}"});{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-meta">
        #<span className="hljs-meta-keyword">region</span>{" "}
        INotifyPropertyChanged Implementation
      </span>
      {"\n"}
      {"            "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">event</span> PropertyChangedEventHandler
      PropertyChanged;{"\n"}
      {"            "}
      <span className="hljs-function">
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">OnPropertyChanged</span>(
        <span className="hljs-params">
          [CallerMemberName] <span className="hljs-keyword">string</span>{" "}
          propertyName = <span className="hljs-string">""</span>
        </span>
        ){"\n"}
        {"            "}
      </span>
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (PropertyChanged =={" "}
      <span className="hljs-literal">null</span>){"\n"}
      {"                    "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"\n"}
      {"                "}PropertyChanged.Invoke(
      <span className="hljs-keyword">this</span>,{" "}
      <span className="hljs-keyword">new</span>{" "}
      PropertyChangedEventArgs(propertyName));{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}
      <span className="hljs-meta">
        #<span className="hljs-meta-keyword">endregion</span>
      </span>
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <pre>
    <code>
      {"    "}
      <span className="hljs-attribute">Para</span> implementar isso basta você
      criar uma flyoutpage, defina navigationpage{" "}
      <span className="hljs-literal">false</span>, e adicione{" "}
      <span className="hljs-literal">no</span> flyoutpage flyout a pagina
      MainPageFlyout Ex:{"\n"}
    </code>
  </pre>
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