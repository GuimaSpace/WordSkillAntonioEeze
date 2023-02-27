import Image from 'next/image'
import Link from 'next/link'


export default function listagem() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Listagem:</span>
                <span>
                <>
  <hr />
  <p>
    Nesse exemplo faremos a listagem de usuarios, basta criar um controller,
    para usuarios no caso, defina uma routeprefix, um método get, dentro dele
    use um try e catch, no trie crie uma lista, que é igual a um select do que
    quiser de uma tabela, transforme em array, e retorne ok com a lista Ex:
  </p>
  <pre>
    <code>
      {"    "}[RoutePrefix(<span className="hljs-string">"api/usuarios"</span>)]
      {"\n"}
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-class">
        <span className="hljs-keyword">class</span>{" "}
        <span className="hljs-title">UsuariosController</span> :{" "}
        <span className="hljs-type">BaseController</span>
      </span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}[HttpGet]{"\n"}
      {"        "}
      <span className="hljs-keyword">public</span> IHttpActionResult Get(){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">try</span>
      {"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">var</span> lista = ctx.Usuario.Select(x
      =&gt; new {"{"}x.Id, x.Apelido, x.Email, x.Bloqueado{"}"}).ToArray();
      {"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> Ok(lista);{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">catch</span> (Exception ex){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">return</span> BadRequest(ex.Message);{"\n"}
      {"                "}
      <span className="hljs-keyword">throw</span>;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
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