import Image from 'next/image'
import Link from 'next/link'


export default function criarrotas() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Criar rotas sem o react-router-dom:</span>
                <span>
                <>
  <hr />
  <p>
    Primeiramente, os seus componentes devem estar dentro de uma pasta
    Componentes no seu src, no src, va ao App.js, dentro do app.js importe todas
    as paginas, croe uma const com useState para definir o caminho, crie um
    useEffect para controlar a mudança das rotas, após isso adicione uma const
    renderComponent, dentro dela defina as rotas e que página elas devem
    carregar, após isso retorne o renderComponent Ex:
  </p>
  <pre>
    <code>
      <span className="hljs-keyword">import</span> React, {"{"} useEffect,
      useState {"}"} <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Cadastro{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Cadastro'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Selecoes{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Selecoes'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Usuarios{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Usuarios'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Edicao{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Edicao'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Jogadores{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Jogadores'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Main{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Main'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Login{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Login'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Auth{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Auth'</span>;{"\n"}
      {"\n"}
      <span className="hljs-keyword">function</span> App() {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [path, setPath] = useState(
      <span className="hljs-built_in">window</span>.location.pathname);{"\n"}
      {"\n"}
      {"    "}useEffect(() =&gt; {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> handleRouteChange = () =&gt;{" "}
      {"{"}
      {"\n"}
      {"            "}setPath(<span className="hljs-built_in">window</span>
      .location.pathname);{"\n"}
      {"        "}
      {"}"};{"\n"}
      {"        "}
      <span className="hljs-built_in">window</span>.addEventListener(
      <span className="hljs-string">'popstate'</span>, handleRouteChange);{"\n"}
      {"        "}
      <span className="hljs-keyword">return</span> () =&gt; {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-built_in">window</span>.removeEventListener(
      <span className="hljs-string">'popstate'</span>, handleRouteChange);{"\n"}
      {"        "}
      {"}"};{"\n"}
      {"    "}
      {"}"}, []);{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> renderComponent = () =&gt;{" "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> parts = path.split(
      <span className="hljs-string">'/'</span>);{"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> id = parts.length &gt;={" "}
      <span className="hljs-number">3</span> ? parts[
      <span className="hljs-number">2</span>] :{" "}
      <span className="hljs-literal">null</span>;{"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> selecaoId = parts.length &gt;={" "}
      <span className="hljs-number">3</span> ? parts[
      <span className="hljs-number">2</span>] :{" "}
      <span className="hljs-literal">null</span>;{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">switch</span> (parts[
      <span className="hljs-number">1</span>]) {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">''</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Login /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'main'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Main /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'cadastro'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Cadastro /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'usuarios'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Usuarios /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'selecoes'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Selecoes /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'edicao'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Edicao id={"{"}id{"}"}{" "}
      /&gt;;{"\n"}
      {"            "}
      <span className="hljs-keyword">case</span>{" "}
      <span className="hljs-string">'jogadores'</span>:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;Jogadores selecaoId={"{"}
      selecaoId{"}"} /&gt;;{"\n"}
      {"            "}default:{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> &lt;p&gt;Página não
      encontrada&lt;/p&gt;;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"};{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> ({"\n"}
      {"            "}&lt;div className=
      <span className="hljs-string">"App"</span>&gt;{"\n"}
      {"                "}
      {"{"}renderComponent(){"}"}
      {"\n"}
      {"            "}&lt;/div&gt;{"\n"}
      {"    "});{"\n"}
      {"}"}
      {"\n"}
      {"\n"}
      <span className="hljs-keyword">export</span>{" "}
      <span className="hljs-keyword">default</span> App;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}