import Image from 'next/image'
import Link from 'next/link'


export default function consumirapi() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Como consumir a API:</span>
                <span>
                <>
  <hr />
  <p>
    crie uma pasta Services, e uma pasta ViewModel dentro do seu projeto base
    xamarin.forms
  </p>
  <p>
    dentro da pasta Services crie uma classe chamada ApiService

      {" "}
      onde T é generico e será substituido pela resposta da API, lá vc define
      uma url base da api, que é o localhost do emulador, ela precisa ser
      definida previamente [[Permitir Mobile | configuração de api]], o emulator
      roda na uri <Link href="http://10.0.2.2">http://10.0.2.2</Link> e a api vai
      estar na porta 5500, ou seja, Uri ={" "}
      <Link href="http://10.0.2.2:5500/api/">http://10.0.2.2:5500/api/</Link>

  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-keyword">class</span> ApiService&lt;T&gt; where T :{" "}
      <span className="hljs-keyword">class</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-built_in">HttpClient</span>{" "}
      <span className="hljs-built_in">Client</span> ={" "}
      <span className="hljs-keyword">new</span>{" "}
      <span className="hljs-built_in">HttpClient</span>
      {"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}BaseAddress = <span className="hljs-keyword">new</span>{" "}
      Uri(<span className="hljs-string">"http://10.0.2.2:5500/api/"</span>)
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-comment">//Restante do código</span>
      {"\n"}
      {"        "}
      {"}"};{"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    após isso cria os metódos que fazem a requizição para a api, um Get, um
    Post, e um Delete, Ex:
  </p>
  <pre>
    <code>
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-keyword">async</span> Task&lt;List&lt;T&gt;&gt;
      GetList(<span className="hljs-keyword">string</span> url){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> response ={" "}
      <span className="hljs-keyword">await</span> Client.GetAsync(url);{"\n"}
      {"            "}response.EnsureSuccessStatusCode();{"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> content ={" "}
      <span className="hljs-keyword">await</span>{" "}
      response.Content.ReadAsStringAsync();{"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> json =
      JsonConvert.DeserializeObject&lt;List&lt;T&gt;&gt;(content);{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span> json.ToList();{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-keyword">async</span>{" "}
        <span className="hljs-keyword">static</span> Task&lt;T&gt;{" "}
        <span className="hljs-title">PostWithReturn</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">string</span> url, T obj
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> json =
      JsonConvert.SerializeObject(obj);{"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> content ={" "}
      <span className="hljs-keyword">new</span> StringContent(json,
      Encoding.UTF8, <span className="hljs-string">"application/json"</span>);
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> response ={" "}
      <span className="hljs-keyword">await</span> Client.PostAsync(url,
      content);{"\n"}
      {"            "}
      <span className="hljs-keyword">
        if
      </span> (!response.IsSuccessStatusCode){" "}
      <span className="hljs-keyword">return</span>{" "}
      <span className="hljs-keyword">default</span>;{"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> stringContent ={" "}
      <span className="hljs-keyword">await</span>{" "}
      response.Content.ReadAsStringAsync();{"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> jsonContent =
      JsonConvert.DeserializeObject&lt;T&gt;(stringContent);{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span> jsonContent;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-keyword">async</span>{" "}
        <span className="hljs-keyword">static</span> Task&lt;
        <span className="hljs-keyword">bool</span>&gt;{" "}
        <span className="hljs-title">Delete</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">string</span> url
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">var</span> response ={" "}
      <span className="hljs-keyword">await</span> Client.GetAsync(url);{"\n"}
      {"            "}
      <span className="hljs-keyword">if</span> (response.IsSuccessStatusCode)
      {"\n"}
      {"                "}
      <span className="hljs-keyword">return</span>{" "}
      <span className="hljs-literal">true</span>;{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span>{" "}
      <span className="hljs-literal">false</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    Após isso crie uma pasta ViewModels, nela crie as classes, BaseViewModel e
    BaseVM Em BaseViewModel é basicamente verificado se algo esta sendo
    modificado no app, para definir se ele está ocupado, o codigo fica da
    seguinte maneira Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">BaseViewModel</span> :{" "}
      <span className="hljs-title">INotifyPropertyChanged</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">bool</span> isBusy;{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">bool</span> IsBusy{"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">set</span> {"{"} SetProperty(
      <span className="hljs-keyword">ref</span> isBusy,{" "}
      <span className="hljs-keyword">value</span>); {"}"}
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">event</span> PropertyChangedEventHandler
      PropertyChanged;{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">protected</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">OnPropertyChanged</span>(
        <span className="hljs-params">
          [CallerMemberName] <span className="hljs-keyword">string</span>{" "}
          propertyName = <span className="hljs-string">""</span>
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}PropertyChanged?.Invoke(
      <span className="hljs-keyword">this</span>,{" "}
      <span className="hljs-keyword">new</span>{" "}
      PropertyChangedEventArgs(propertyName));{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">protected</span>{" "}
      <span className="hljs-keyword">void</span> SetProperty&lt;T&gt;(
      <span className="hljs-keyword">ref</span> T backingField, T{" "}
      <span className="hljs-keyword">value</span>, [CallerMemberName]{" "}
      <span className="hljs-keyword">string</span> propertyName ={" "}
      <span className="hljs-string">""</span>){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">if</span>{" "}
      (EqualityComparer&lt;T&gt;.Default.Equals(backingField,{" "}
      <span className="hljs-keyword">value</span>)){"\n"}
      {"                "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"\n"}
      {"            "}backingField = <span className="hljs-keyword">value</span>
      ;{"\n"}
      {"            "}OnPropertyChanged(propertyName);{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    E a BaseVM serve basicamente para notificar o app imediatamente quando os
    dados são modificados, funciona em tempos real Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-class">
        <span className="hljs-keyword">class</span>{" "}
        <span className="hljs-title">BaseVM</span> :{" "}
        <span className="hljs-title">BaseViewModel</span>
        {"\n"}
        {"    "}
      </span>
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      ObservableCollection&lt;RelatosModel&gt; Relatos {"{"}{" "}
      <span className="hljs-keyword">get</span>;{" "}
      <span className="hljs-keyword">set</span>; {"}"} ={" "}
      <span className="hljs-keyword">new</span>{" "}
      <span className="hljs-type">ObservableCollection</span>
      &lt;RelatosModel&gt;();{"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}