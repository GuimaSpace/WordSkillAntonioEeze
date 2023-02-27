import Image from 'next/image'
import Link from 'next/link'


export default function consumiredicao() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Consumir Edição:</span>
                <span>
                <>
  <hr />
  <p>
    {" "}
    aqui ensinarei a consumir um metodo de [[Edição Básica | edição]], esse
    método precisa de um id referenciado na url, então antes de ir para essa
    pagina de edição com a url, criamos um botão de editar em um local onde
    lista os usuarios como em [[Consumindo Listar]], no exemplo temos uma imagem
    na lista do usuario que ao ser clicada leva pra página de edição com o id
  </p>
  <pre>
    <code>
      <span className="hljs-keyword">import</span> React, {"{"} useState,
      useEffect {"}"} <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      {"\n"}
      <span className="hljs-function">
        <span className="hljs-keyword">function</span>{" "}
        <span className="hljs-title">Usuarios</span>(
        <span className="hljs-params" />){" "}
      </span>
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [usuarios, setUsuarios] =
      useState([]);{"\n"}
      {"\n"}
      {"    "}useEffect(
      <span className="hljs-function">
        <span className="hljs-params">()</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}fetch(
      <span className="hljs-string">'http://localhost:62575/api/usuarios'</span>
      ){"\n"}
      {"            "}.then(
      <span className="hljs-function">
        <span className="hljs-params">response</span> =&gt;
      </span>{" "}
      response.json()){"\n"}
      {"            "}.then(
      <span className="hljs-function">
        <span className="hljs-params">data</span> =&gt;
      </span>{" "}
      setUsuarios(data)){"\n"}
      {"            "}.catch(
      <span className="hljs-function">
        <span className="hljs-params">error</span> =&gt;
      </span>{" "}
      <span className="hljs-built_in">console</span>.error(error));{"\n"}
      {"    "}
      {"}"}, []);{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-comment">//Código Adicionado</span>
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> handleEdit ={" "}
      <span className="hljs-function">
        (<span className="hljs-params">usuario</span>) =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-built_in">window</span>.history.pushState({"{"}
      {"}"}, <span className="hljs-string">''</span>,{" "}
      <span className="hljs-string">
        `/edicao/
        <span className="hljs-subst">
          ${"{"}usuario.Id{"}"}
        </span>
        `
      </span>
      );{"\n"}
      {"        "}
      <span className="hljs-built_in">window</span>.location.reload();{"\n"}
      {"    "}
      {"}"}
      {"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> ({"\n"}
      {"        "}
      <span className="xml">
        <span className="hljs-tag">
          &lt;<span className="hljs-name">div</span>&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">h1</span>&gt;
        </span>
        Usuários
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">h1</span>&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">ul</span>&gt;
        </span>
        {"\n"}
        {"                "}
        {"{"}usuarios.map(usuario =&gt; ({"\n"}
        {"                    "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">li</span>{" "}
          <span className="hljs-attr">key</span>=
          <span className="hljs-string">
            {"{"}usuario.Id{"}"}
          </span>
          &gt;
        </span>
        {"\n"}
        {"                        "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">p</span>&gt;
        </span>
        Apelido: {"{"}usuario.Apelido{"}"}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">p</span>&gt;
        </span>
        {"\n"}
        {"                        "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">p</span>&gt;
        </span>
        Email: {"{"}usuario.Email{"}"}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">p</span>&gt;
        </span>
        {"\n"}
        {"                        "}
        {"{"}/*Adicionado*/{"}"}
        {"\n"}
        {"                        "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">img</span>
          {"\n"}
          {"                            "}
          <span className="hljs-attr">src</span>=
          <span className="hljs-string">
            {"{"}editIcon{"}"}
          </span>
          {"\n"}
          {"                            "}
          <span className="hljs-attr">alt</span>=
          <span className="hljs-string">"Editar"</span>
          {"\n"}
          {"                            "}
          <span className="hljs-attr">style</span>=
          <span className="hljs-string">
            {"{"}
            {"{"}
          </span>{" "}
          <span className="hljs-attr">width:</span>{" "}
          <span className="hljs-attr">20</span>,{" "}
          <span className="hljs-attr">height:</span>{" "}
          <span className="hljs-attr">20</span> {"}"}
          {"}"}
          {"\n"}
          {"                            "}
          <span className="hljs-attr">onClick</span>=
          <span className="hljs-string">{"{"}()</span> =&gt;
        </span>{" "}
        handleEdit(usuario){"}"}
        {"\n"}
        {"                        "}/&gt;{"\n"}
        {"                    "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">li</span>&gt;
        </span>
        {"\n"}
        {"                    "})){"}"}
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">ul</span>&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">div</span>&gt;
        </span>
        {"\n"}
        {"    "});{"\n"}
        {"}"}
        {"\n"}
        {"\n"}export default Usuarios;
      </span>
      {"\n"}
    </code>
  </pre>
  <p>
    após isso crie uma página Edicao.js, na pagina edica, importe useState e
    useEffect, crie consts para os dados do usuario a serem editados, utilize o
    useEffect para consumir [[Listar por id]] para pegar os dados do usuario que
    está sendo editado e colocar nos inputs, crie um handle para o submit que
    consuma a [[Edição Básica]], depois é só criar um form que com o submit
    execute o handler (é interessante citar que nesse exemplo, tem algo legal,
    um checkbox, que define uma string no banco, se o checkbox estiver marcado,
    ele define administrador, se não usuario) Ex
  </p>
  <pre>
    <code>
      import React, {"{"} useState, useEffect {"}"}{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      {"\n"}
      <span className="hljs-function">
        function <span className="hljs-title">Edicao</span>(
        <span className="hljs-params">props</span>){" "}
      </span>
      {"{"}
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
      {"    "}useEffect(() =&gt; {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">let</span> id;{"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (props.id) {"{"}
      {"\n"}
      {"            "}id = props.id;{"\n"}
      {"        "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">const</span> parts =
      window.location.pathname.split(<span className="hljs-string">'/'</span>);
      {"\n"}
      {"            "}id = parts[<span className="hljs-number">2</span>];{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}fetch(`http:
      <span className="hljs-comment">
        //localhost:62575/api/usuarios/${"{"}id{"}"}`)
      </span>
      {"\n"}
      {"            "}.then(response =&gt; response.json()){"\n"}
      {"            "}.then(data =&gt; {"{"}
      {"\n"}
      {"                "}setNome(data[<span className="hljs-number">0</span>
      ].Nome);{"\n"}
      {"                "}setEmail(data[<span className="hljs-number">0</span>
      ].Email);{"\n"}
      {"                "}setApelido(data[<span className="hljs-number">0</span>
      ].Apelido);{"\n"}
      {"                "}setSenha(data[<span className="hljs-number">0</span>
      ].Senha);{"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (data[
      <span className="hljs-number">0</span>].Perfil.includes(
      <span className="hljs-string">"Administrador"</span>)) {"{"}
      {"\n"}
      {"                    "}setPerfil(
      <span className="hljs-literal">true</span>);{"\n"}
      {"                "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"                    "}setPerfil(
      <span className="hljs-literal">false</span>);{"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}){"\n"}
      {"            "}.<span className="hljs-keyword">catch</span>(error =&gt;
      console.error(error));{"\n"}
      {"    "}
      {"}"}, [props.id]);{"\n"}
      {"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> handleSubmit = (
      <span className="hljs-keyword">event</span>) =&gt; {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">event</span>.preventDefault();{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> usuario = {"{"} Nome, Email,
      Apelido, Senha {"}"};{"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (Perfil) {"{"}
      {"\n"}
      {"            "}usuario.Perfil ={" "}
      <span className="hljs-string">'Administrador'</span>;{"\n"}
      {"        "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"            "}usuario.Perfil ={" "}
      <span className="hljs-string">'Usuario'</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> id = props.id;{"\n"}
      {"\n"}
      {"        "}fetch(`http:
      <span className="hljs-comment">
        //localhost:62575/api/usuarios/${"{"}id{"}"}`, {"{"}
      </span>
      {"\n"}
      {"            "}method: <span className="hljs-string">'POST'</span>,{"\n"}
      {"            "}headers: {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-string">'Content-Type'</span>:{" "}
      <span className="hljs-string">'application/json'</span>
      {"\n"}
      {"            "}
      {"}"},{"\n"}
      {"            "}body: JSON.stringify(usuario){"\n"}
      {"        "}
      {"}"}){"\n"}
      {"            "}.then(response =&gt; {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (response.ok) {"{"}
      {"\n"}
      {"                    "}window.history.pushState({"{"}
      {"}"}, <span className="hljs-string">''</span>,{" "}
      <span className="hljs-string">'/usuarios'</span>);{"\n"}
      {"                    "}window.location.reload();{"\n"}
      {"                "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">throw</span>{" "}
      <span className="hljs-keyword">new</span> Error(
      <span className="hljs-string">'Erro ao atualizar usuário'</span>);{"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}){"\n"}
      {"            "}.<span className="hljs-keyword">catch</span>(error =&gt;
      console.error(error));{"\n"}
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
      <span className="hljs-string">"submit"</span>&gt;Salvarr&lt;/button&gt;
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
      {"            "}&lt;button onClick={"{"}handleLogout{"}"}
      &gt;Sair&lt;/button&gt;{"\n"}
      {"        "}&lt;/div&gt;{"\n"}
      {"    "});{"\n"}
      {"}"}
      {"\n"}
      {"\n"}export <span className="hljs-keyword">default</span> Edicao;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}