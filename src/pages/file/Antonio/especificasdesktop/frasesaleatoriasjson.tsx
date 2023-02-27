import Image from 'next/image'
import Link from 'next/link'


export default function frasesaleatoriasjson() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Apresentar frase aleatorias de um arquivo json:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        veremos como apresentar frases aleatorias de um arquivo json toda vez
        que o usuario se loga, é muito simples
      </p>
    </li>
    <li>
      <p>
        primeiramente, adicione o arquivo json aos Resources, crie uma classe
        chamada JsonMessage, onde mapeara os dados do arquivo json Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">internal</span>{" "}
          <span className="hljs-keyword">class</span>{" "}
          <span className="hljs-title">JsonMessage</span>
          {"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">string</span> mensagem {"{"}{" "}
          <span className="hljs-keyword">get</span>;{" "}
          <span className="hljs-keyword">set</span>; {"}"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">public</span>{" "}
          <span className="hljs-keyword">string</span> autor {"{"}{" "}
          <span className="hljs-keyword">get</span>;{" "}
          <span className="hljs-keyword">set</span>; {"}"}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        após isso, adicione a label onde ficara a frase no form, nesse caso
        frase e autor, vá ao cs e adicione uma função para seletar a frase, e
        atribui-la as labels Ex:
      </p>
      <pre>
        <code>
          private void SetPhrase(){"\n"}
          {"{"}
          {"\n"}
          {"  "}var menssages ={" "}
          <span className="hljs-keyword">
            JsonConvert.DeserializeObject&lt;JsonMessage[]&gt;(Encoding.UTF8.GetString(Properties.Resources.mensagens));
            {"\n"}
          </span>
          {"\n"}
          {"  "}
          <span className="hljs-built_in">Random</span> rand = new{" "}
          <span className="hljs-built_in">Random</span>()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}var message = menssages[rand.Next(menssages.Length)]
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}label3<span className="hljs-meta">.Text</span> =
          message.mensagem<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}label4<span className="hljs-meta">.Text</span> = message.autor
          <span className="hljs-comment">;</span>
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
  </ul>
</>

                </span>
            </div>
        </div>
    )
}