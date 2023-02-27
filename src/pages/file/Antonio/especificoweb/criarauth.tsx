import Image from 'next/image'
import Link from 'next/link'


export default function criarauth() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Criar Auth, para que as páginas só apareçam com o usuario logado:</span>
                <span>
                <>
  <hr />
  <p>
    o auth funciona atraves do localStorage, se o usuario estiver logado, terá
    um localStorage com seus dados, entaõ dentro do auth vc importa a pagina
    login, adicione um parametro a função Auth chaamda props, crie uma const
    para usuario com useState, adicione um useEffect, que pega o usuario do
    localStorage, caso o usuario exista, ele carrega o que tem dentro do auth,
    se não ele carrega o login Ex:
  </p>
  <pre>
    <code>
      <span className="hljs-keyword">import</span> React, {"{"} useState,
      useEffect {"}"} <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'react'</span>;{"\n"}
      <span className="hljs-keyword">import</span> Login{" "}
      <span className="hljs-keyword">from</span>{" "}
      <span className="hljs-string">'./Componentes/Login'</span>;{"\n"}
      {"\n"}
      <span className="hljs-function">
        <span className="hljs-keyword">function</span>{" "}
        <span className="hljs-title">Auth</span>(
        <span className="hljs-params">props</span>){" "}
      </span>
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">const</span> [usuario, setUsuario] =
      useState(<span className="hljs-literal">null</span>);{"\n"}
      {"\n"}
      {"    "}useEffect(
      <span className="hljs-function">
        <span className="hljs-params">()</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">const</span> localStorageUsuario =
      localStorage.getItem(<span className="hljs-string">'usuario'</span>);
      {"\n"}
      {"        "}
      <span className="hljs-keyword">if</span> (localStorageUsuario) {"{"}
      {"\n"}
      {"            "}setUsuario(<span className="hljs-built_in">JSON</span>
      .parse(localStorageUsuario));{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}, []);{"\n"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">if</span> (usuario) {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">return</span> props.children;{"\n"}
      {"    "}
      {"}"} <span className="hljs-keyword">else</span> {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">return</span>{" "}
      <span className="xml">
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Login</span> /&gt;
        </span>
        ;{"\n"}
        {"    "}
        {"}"}
        {"\n"}
        {"}"}
        {"\n"}
        {"\n"}export default Auth;
      </span>
      {"\n"}
    </code>
  </pre>
  <p>
    após isso dentro do return do seu app.js coloque o renderizador de
    componente dentro do auth Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">return</span> ({"\n"}
      {"        "}
      <span className="xml">
        <span className="hljs-tag">
          &lt;<span className="hljs-name">Auth</span>&gt;
        </span>
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;<span className="hljs-name">div</span>{" "}
          <span className="hljs-attr">className</span>=
          <span className="hljs-string">"App"</span>&gt;
        </span>
        {"\n"}
        {"                "}
        {"{"}renderComponent(){"}"}
        {"\n"}
        {"            "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">div</span>&gt;
        </span>
        {"\n"}
        {"        "}
        <span className="hljs-tag">
          &lt;/<span className="hljs-name">Auth</span>&gt;
        </span>
      </span>
      {"\n"}
      {"    "}){"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}