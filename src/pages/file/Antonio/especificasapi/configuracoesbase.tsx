import Image from 'next/image'
import Link from 'next/link'


export default function configuracoesbase() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Configurações Base para API:</span>
                <span>
                <>
  <hr />
  <h2 id="webapiconfig">WebApiConfig</h2>
  <p>
    primeiramente, vá a pasta App_Start na base do projeto, WebApiConfig, lá
    você utilizara o usara o config com os formatter e json formatter para
    ignorar nullo, ignorar loops, e para remover o formartador xml Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-keyword">class</span> WebApiConfig{"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span>{" "}
      <span className="hljs-keyword">void</span> Register(HttpConfiguration{" "}
      <span className="hljs-built_in">config</span>){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-comment">
        // Web API configuration and services
      </span>
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-comment">// Web API routes</span>
      {"\n"}
      {"            "}
      <span className="hljs-built_in">config</span>.MapHttpAttributeRoutes();
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-built_in">config</span>.Routes.MapHttpRoute({"\n"}
      {"                "}name:{" "}
      <span className="hljs-string">"DefaultApi"</span>,{"\n"}
      {"                "}routeTemplate:{" "}
      <span className="hljs-string">
        "api/{"{"}controller{"}"}/{"{"}id{"}"}"
      </span>
      ,{"\n"}
      {"                "}defaults: <span className="hljs-keyword">new</span>{" "}
      {"{"} id = RouteParameter.Optional {"}"}
      {"\n"}
      {"            "});{"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-built_in">config</span>
      .Formatters.JsonFormatter.SerializerSettings.NullValueHandling =
      Newtonsoft.Json.NullValueHandling.Ignore;{"\n"}
      {"            "}
      <span className="hljs-built_in">config</span>
      .Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling =
      Newtonsoft.Json.ReferenceLoopHandling.Ignore;{"\n"}
      {"            "}
      <span className="hljs-built_in">config</span>.Formatters.Remove(
      <span className="hljs-built_in">config</span>.Formatters.XmlFormatter);
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    Após isso vá para a página Web.config, na base do seu projeto, remova os
    handlers dentro do sytem.webServer, e adicione um httpProtocol que seta as
    origens permitidas, os metodos permitdos, e os header permitidos Ex:
  </p>
  <pre>
    <code>
      {"  "}&lt;system.webServer&gt;{"\n"}
      {"      "}&lt;httpProtocol&gt;{"\n"}
      {"          "}&lt;customHeaders&gt;{"\n"}
      {"              "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Origin"</span> value=
      <span className="hljs-string">"*"</span> /&gt;{"\n"}
      {"              "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Methods"</span> value=
      <span className="hljs-string">
        "<span className="hljs-keyword">GET</span>,{" "}
        <span className="hljs-keyword">POST</span>"
      </span>{" "}
      /&gt;{"\n"}
      {"              "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Headers"</span> value=
      <span className="hljs-string">"Content-Type"</span> /&gt;{"\n"}
      {"          "}&lt;/customHeaders&gt;{"\n"}
      {"      "}&lt;/httpProtocol&gt;{"\n"}
      {"  "}&lt;/system.webServer&gt;{"\n"}
    </code>
  </pre>
  <p>
    Para adicionar o banco de dados dentro da APi basta ir na pasta models,
    clicar com o botão direito, adcionar, novo item, data, ado.net entity data
    model, next, new connection em server name adicionar .\sqlexpress, selecionr
    o banco de dados, ok, next, selecionar as tabelas e finish.
  </p>
  <h2 id="cookies">Cookies</h2>
  <p>
    caso for utilizar Cookies com a sua API, é necessário fazer mais algumas
    mudanças dentro da sua Web.config, dentro do customheadersm precisa permitir
    no header 'Authorization' e permitir Credentials Ex:
  </p>
  <pre>
    <code>
      {"    "}&lt;system.webServer&gt;{"\n"}
      {"      "}&lt;httpProtocol&gt;{"\n"}
      {"        "}&lt;customHeaders&gt;{"\n"}
      {"          "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Origin"</span> value=
      <span className="hljs-string">"*"</span> /&gt;{"\n"}
      {"          "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Methods"</span> value=
      <span className="hljs-string">
        "<span className="hljs-keyword">GET</span>,{" "}
        <span className="hljs-keyword">PUT</span>,{" "}
        <span className="hljs-keyword">POST</span>,{" "}
        <span className="hljs-keyword">DELETE</span>,{" "}
        <span className="hljs-keyword">OPTIONS</span>"
      </span>{" "}
      /&gt;{"\n"}
      {"          "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Headers"</span> value=
      <span className="hljs-string">"Content-Type, Authorization"</span> /&gt;
      {"\n"}
      {"          "}&lt;add name=
      <span className="hljs-string">"Access-Control-Allow-Credentials"</span>{" "}
      value=<span className="hljs-string">"true"</span> /&gt;{"\n"}
      {"        "}&lt;/customHeaders&gt;{"\n"}
      {"      "}&lt;/httpProtocol&gt;{"\n"}
      {"    "}&lt;/system.webServer&gt;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}