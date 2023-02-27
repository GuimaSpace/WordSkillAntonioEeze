import Image from 'next/image'
import Link from 'next/link'


export default function consumindolista() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Consumindo Listar:</span>
                <span>
                <>
  <hr />
  <p>
    Aqui veremos como consumir um método da [[Listagem | api]] para listar
    usuarios no caso, importe useState, useEffect, crie uma const useState de
    usuarios, utilize o useEffect para trazer api, após isso, no retunr você da
    um map em usuarios, e cria uma lista com uma key para cada usuario, no caso
    o id, e seleciona o que quer que apareça Ex:
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
      </span>
      {"\n"}
      {"    "});{"\n"}
      {"}"}
      {"\n"}
      {"\n"}
      <span className="hljs-keyword">export</span>{" "}
      <span className="hljs-keyword">default</span> Usuarios;{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}