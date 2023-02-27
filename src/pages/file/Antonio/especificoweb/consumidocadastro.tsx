import Image from 'next/image'
import Link from 'next/link'


export default function consumircadastro() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Consumir Cadastro:</span>
                <span>
                <>
  <hr />
  <p>
    como sempre importe a biblioteca useState e useEffect, crie consts com
    useState para as propriedades do usuario, crie um handle submit para
    requisitar a api, e fazer algumas condições nesse caso, e criar um
    formulario com o que for necessario(é interessante citar que nesse exemplo,
    tem algo legal, um checkbox, que define uma string no banco, se o checkbox
    estiver marcado, ele define administrador, se não usuario) Ex
  </p>
  <pre>
    <code>
      import React, {"{"} useState, useEffect {"}"}{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      {"\n"}
      <span className="hljs-function">
        function <span className="hljs-title">Cadastro</span>(
        <span className="hljs-params" />){" "}
      </span>
      {"{"}
      {"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [Nome, setNome] = useState(
      <span className="hljs-string">''</span>);{"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [Email, setEmail] = useState(
      <span className="hljs-string">''</span>);{"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [Apelido, setApelido] =
      useState(<span className="hljs-string">''</span>);{"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [Senha, setSenha] = useState(
      <span className="hljs-string">''</span>);{"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [Perfil, setPerfil] =
      useState(<span className="hljs-literal">false</span>);{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> handleSubmit = (
      <span className="hljs-keyword">event</span>) =&gt; {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">event</span>.preventDefault();{"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (Nome.length &lt;{" "}
      <span className="hljs-number">3</span>) {"{"}
      {"\n"}
      {"            "}alert(
      <span className="hljs-string">
        'O nome deve ter no mínimo 3 caracteres.'
      </span>
      );{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (Apelido.length &lt;{" "}
      <span className="hljs-number">3</span>) {"{"}
      {"\n"}
      {"            "}alert(
      <span className="hljs-string">
        'O apelido deve ter no mínimo 3 caracteres.'
      </span>
      );{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (Senha.length &lt;{" "}
      <span className="hljs-number">3</span>) {"{"}
      {"\n"}
      {"            "}alert(
      <span className="hljs-string">
        'A senha deve ter no mínimo 3 caracteres.'
      </span>
      );{"\n"}
      {"            "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> body = {"{"} Nome, Email,
      Apelido, Senha {"}"};{"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (Perfil) {"{"}
      {"\n"}
      {"            "}body.Perfil ={" "}
      <span className="hljs-string">'Admnistrador'</span>;{"\n"}
      {"        "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"            "}body.Perfil ={" "}
      <span className="hljs-string">'Usuario'</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}fetch(
      <span className="hljs-string">'http://localhost:62575/api/usuarios'</span>
      , {"{"}
      {"\n"}
      {"            "}method: <span className="hljs-string">'POST'</span>,{"\n"}
      {"            "}body: JSON.stringify(body),{"\n"}
      {"            "}headers: {"{"}{" "}
      <span className="hljs-string">'Content-Type'</span>:{" "}
      <span className="hljs-string">'application/json'</span> {"}"},{"\n"}
      {"        "}
      {"}"}){"\n"}
      {"            "}.then((response) =&gt; response.json()){"\n"}
      {"            "}.then((data) =&gt; {"{"}
      {"\n"}
      {"                "}console.log(data);{"\n"}
      {"                "}alert(
      <span className="hljs-string">'Cadastro realizado com sucesso!'</span>);
      {"\n"}
      {"            "}
      {"}"}){"\n"}
      {"            "}.<span className="hljs-keyword">catch</span>((error) =&gt;{" "}
      {"{"}
      {"\n"}
      {"                "}console.log(error);{"\n"}
      {"                "}alert(
      <span className="hljs-string">
        'Ocorreu um erro ao realizar o cadastro'
      </span>
      );{"\n"}
      {"            "}
      {"}"});{"\n"}
      {"    "}
      {"}"};{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> ({"\n"}
      {"        "}&lt;div&gt;{"\n"}
      {"            "}&lt;form onSubmit={"{"}handleSubmit{"}"}&gt;{"\n"}
      {"                "}&lt;label&gt;{"\n"}
      {"                    "}Nome:{"\n"}
      {"                    "}&lt;input type=
      <span className="hljs-string">"text"</span>{" "}
      <span className="hljs-keyword">value</span>={"{"}Nome{"}"} onChange={"{"}(
      <span className="hljs-keyword">event</span>) =&gt; setNome(
      <span className="hljs-keyword">event</span>.target.
      <span className="hljs-keyword">value</span>){"}"} /&gt;{"\n"}
      {"                "}&lt;/label&gt;{"\n"}
      {"                "}&lt;label&gt;{"\n"}
      {"                    "}E-mail:{"\n"}
      {"                    "}&lt;input type=
      <span className="hljs-string">"email"</span>{" "}
      <span className="hljs-keyword">value</span>={"{"}Email{"}"} onChange={"{"}
      (<span className="hljs-keyword">event</span>) =&gt; setEmail(
      <span className="hljs-keyword">event</span>.target.
      <span className="hljs-keyword">value</span>){"}"} /&gt;{"\n"}
      {"                "}&lt;/label&gt;{"\n"}
      {"                "}&lt;label&gt;{"\n"}
      {"                    "}Apelido:{"\n"}
      {"                    "}&lt;input type=
      <span className="hljs-string">"text"</span>{" "}
      <span className="hljs-keyword">value</span>={"{"}Apelido{"}"} onChange=
      {"{"}(<span className="hljs-keyword">event</span>) =&gt; setApelido(
      <span className="hljs-keyword">event</span>.target.
      <span className="hljs-keyword">value</span>){"}"} /&gt;{"\n"}
      {"                "}&lt;/label&gt;{"\n"}
      {"                "}&lt;label&gt;{"\n"}
      {"                    "}Senha:{"\n"}
      {"                    "}&lt;input type=
      <span className="hljs-string">"password"</span>{" "}
      <span className="hljs-keyword">value</span>={"{"}Senha{"}"} onChange={"{"}
      (<span className="hljs-keyword">event</span>) =&gt; setSenha(
      <span className="hljs-keyword">event</span>.target.
      <span className="hljs-keyword">value</span>){"}"} /&gt;{"\n"}
      {"                "}&lt;/label&gt;{"\n"}
      {"                "}&lt;label&gt;{"\n"}
      {"                    "}Administrador:{"\n"}
      {"                    "}&lt;input type=
      <span className="hljs-string">"checkbox"</span>{" "}
      <span className="hljs-keyword">checked</span>={"{"}Perfil{"}"} onChange=
      {"{"}(<span className="hljs-keyword">event</span>) =&gt; setPerfil(
      <span className="hljs-keyword">event</span>.target.
      <span className="hljs-keyword">checked</span>){"}"} /&gt;{"\n"}
      {"                "}&lt;/label&gt;{"\n"}
      {"                "}&lt;button type=
      <span className="hljs-string">"submit"</span>&gt;Cadastrar&lt;/button&gt;
      {"\n"}
      {"            "}&lt;/form&gt;{"\n"}
      {"\n"}
      {"            "}&lt;button onClick={"{"}() =&gt; {"{"}
      {"\n"}
      {"                "}window.history.pushState({"{"}
      {"}"}, <span className="hljs-string">''</span>,{" "}
      <span className="hljs-string">'/usuarios'</span>);{"\n"}
      {"                "}window.location.reload();{"\n"}
      {"            "}
      {"}"}
      {"}"}&gt;Usuarios&lt;/button&gt;{"\n"}
      {"        "}&lt;/div&gt;{"\n"}
      {"    "});{"\n"}
      {"}"}
      {"\n"}
      {"\n"}export <span className="hljs-keyword">default</span> Cadastro;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}