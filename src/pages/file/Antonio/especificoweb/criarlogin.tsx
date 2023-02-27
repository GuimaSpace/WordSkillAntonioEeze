import Image from 'next/image'
import Link from 'next/link'


export default function criarlogin() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Criar login que adiciona localStorage:</span>
                <span>
                <>
  <hr />
  <p>
    primeiramente, para criar um login, importe useState e useEffect, crie
    consts com useState para email, senha, e error, crie handlers para setar o
    email e senha, e um handleSubmit que consuma a [[Login Básico | Api Login]],
    use o fetch para fazer a request, e o then/catch para tratamento de
    resposta, após isso, só criar um form com o handle submit os inputs e o
    botao submit, ao se logar ele cria um localStorage usuario Ex:
  </p>
  <pre>
    <code>
      <span className="hljs-keyword">import</span> React, {"{"} useState,
      useEffect {"}"} <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Main{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Main'</span>;{"\n"}
      {"\n"}function Login() {"{"}
      {"\n"}
      {"    "}const [email, setEmail] = useState(
      <span className="hljs-string">''</span>);{"\n"}
      {"    "}const [senha, setSenha] = useState(
      <span className="hljs-string">''</span>);{"\n"}
      {"    "}const [<span className="hljs-built_in">error</span>, setError] =
      useState(<span className="hljs-string">''</span>);{"\n"}
      {"\n"}
      {"    "}const handleEmailChange ={" "}
      <span className="hljs-function">
        <span className="hljs-params">(event)</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}setEmail(event.target.value);{"\n"}
      {"    "}
      {"}"};{"\n"}
      {"\n"}
      {"    "}const handleSenhaChange ={" "}
      <span className="hljs-function">
        <span className="hljs-params">(event)</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}setSenha(event.target.value);{"\n"}
      {"    "}
      {"}"};{"\n"}
      {"\n"}
      {"    "}const handleSubmit ={" "}
      <span className="hljs-function">
        <span className="hljs-params">(event)</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}event.preventDefault();{"\n"}
      {"\n"}
      {"        "}fetch(
      <span className="hljs-string">'http://localhost:62575/api/login'</span>,{" "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-name">method</span>:{" "}
      <span className="hljs-string">'POST'</span>,{"\n"}
      {"            "}
      <span className="hljs-name">headers</span>: {"{"}{" "}
      <span className="hljs-string">'Content-Type'</span>:{" "}
      <span className="hljs-string">'application/json'</span> {"}"},{"\n"}
      {"            "}
      <span className="hljs-name">body</span>: JSON.stringify({"{"} email, senha{" "}
      {"}"}){"\n"}
      {"        "}
      {"}"}){"\n"}
      {"            "}.<span className="hljs-keyword">then</span>(
      <span className="hljs-function">
        <span className="hljs-params">(response)</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (response.ok) {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">return</span> response.json();{"\n"}
      {"                "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"                    "}throw new Error(
      <span className="hljs-string">'Email ou senha inválidos'</span>);{"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}){"\n"}
      {"            "}.<span className="hljs-keyword">then</span>(
      <span className="hljs-function">
        <span className="hljs-params">(usuario)</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (usuario) {"{"}
      {"\n"}
      {"                    "}localStorage.setItem(
      <span className="hljs-string">'usuario'</span>, JSON.stringify(usuario));
      {"\n"}
      {"                    "}window.history.pushState({"{"}
      {"}"}, <span className="hljs-string">''</span>,{" "}
      <span className="hljs-string">'/main'</span>);{"\n"}
      {"                    "}window.location.reload();{"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}){"\n"}
      {"            "}.catch(
      <span className="hljs-function">
        <span className="hljs-params">
          (<span className="hljs-built_in">error</span>)
        </span>{" "}
        =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"                "}setError(<span className="hljs-built_in">error</span>
      .message);{"\n"}
      {"            "}
      {"}"});{"\n"}
      {"    "}
      {"}"};{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> ({"\n"}
      {"        "}&lt;&gt;{"\n"}
      {"            "}&lt;form onSubmit={"{"}handleSubmit{"}"} className=
      <span className="hljs-string">"login-form"</span>&gt;{"\n"}
      {"                    "}&lt;input{"\n"}
      {"                        "}
      <span className="hljs-built_in">type</span>=
      <span className="hljs-string">"text"</span>
      {"\n"}
      {"                        "}id=
      <span className="hljs-string">"email"</span>
      {"\n"}
      {"                        "}name=
      <span className="hljs-string">"email"</span>
      {"\n"}
      {"                        "}value={"{"}email{"}"}
      {"\n"}
      {"                        "}onChange={"{"}handleEmailChange{"}"}
      {"\n"}
      {"                        "}className=
      <span className="hljs-string">"login-input"</span>
      {"\n"}
      {"                        "}placeholder=
      <span className="hljs-string">"Email"</span>
      {"\n"}
      {"                    "}/&gt;{"\n"}
      {"                    "}&lt;input{"\n"}
      {"                        "}
      <span className="hljs-built_in">type</span>=
      <span className="hljs-string">"password"</span>
      {"\n"}
      {"                        "}id=
      <span className="hljs-string">"senha"</span>
      {"\n"}
      {"                        "}name=
      <span className="hljs-string">"senha"</span>
      {"\n"}
      {"                        "}value={"{"}senha{"}"}
      {"\n"}
      {"                        "}onChange={"{"}handleSenhaChange{"}"}
      {"\n"}
      {"                        "}className=
      <span className="hljs-string">"login-input"</span>
      {"\n"}
      {"                        "}placeholder=
      <span className="hljs-string">"Senha"</span>
      {"\n"}
      {"                    "}/&gt;{"\n"}
      {"                    "}
      {"{"}
      <span className="hljs-built_in">error</span> &amp;&amp; ({"\n"}
      {"                        "}&lt;p className=
      <span className="hljs-string">"login-error"</span>&gt;{"{"}
      <span className="hljs-built_in">error</span>
      {"}"}&lt;/p&gt;{"\n"}
      {"                    "}){"}"}
      {"\n"}
      {"                    "}&lt;button{" "}
      <span className="hljs-built_in">type</span>=
      <span className="hljs-string">"submit"</span> className=
      <span className="hljs-string">"login-button"</span>&gt;
      {"                          "}Entrar{"\n"}
      {"                    "}&lt;/button&gt;{"\n"}
      {"                "}&lt;/form&gt;{"\n"}
      {"            "}&lt;/div&gt;{"\n"}
      {"        "}&lt;/&gt;{"\n"}
      {"    "});{"\n"}
      {"}"}
      {"\n"}
      {"\n"}
      <span className="hljs-keyword">export</span> default Login;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}