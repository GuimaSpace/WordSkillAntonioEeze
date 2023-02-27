import Image from 'next/image'
import Link from 'next/link'


export default function listarporid() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Listar por id:</span>
                <span>
                <>
  <hr />
  <p>
    para listar os dados do usuario por id é simples, quase a mesma coisa que o
    listar padrão mas vc adiciona um route para o id Ex:
  </p>
  <pre>
    <code>
      [<span className="hljs-name">RoutePrefix</span>(
      <span className="hljs-string">"api/usuarios"</span>)]{"\n"}public class
      UsuariosController : BaseController{"\n"}
      {"{"}
      {"\n"}
      {"    "}[<span className="hljs-name">HttpGet</span>]{"\n"}
      {"    "}[<span className="hljs-name">Route</span>(
      <span className="hljs-string">
        "{"{"}id{"}"}"
      </span>
      )]{"\n"}
      {"    "}public IHttpActionResult GetUser(
      <span className="hljs-name">int</span> id){"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}try{"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}var lista = ctx.Usuario.Select(
      <span className="hljs-name">x</span> =&gt; new {"{"} x.Id, x.Nome,
      x.Apelido, x.Email, x.Perfil, x.Senha{"}"}).Where(
      <span className="hljs-name">x</span> =&gt; x.Id == id).ToArray()
      <span className="hljs-comment">;</span>
      {"\n"}
      {"            "}return Ok(<span className="hljs-name">lista</span>)
      <span className="hljs-comment">;</span>
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"        "}catch (<span className="hljs-name">Exception</span> ex){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}return BadRequest(
      <span className="hljs-name">ex.Message</span>)
      <span className="hljs-comment">;</span>
      {"\n"}
      {"            "}throw<span className="hljs-comment">;</span>
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
      {"}"}
      {"\n"}
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