import Image from 'next/image'
import Link from 'next/link'


export default function edicoesbasica() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Edição basica:</span>
                <span>
                <>
  <hr />
  <p>
    para fazer um método api para edição é simples, basta criar routeprefix,
    criar um método post com um id no route, ele ira buscar o usuario existente
    pelo id, e entao fazer com que o valor do usuario exsitente seja igual o que
    será recebido, então salva, e retorna ok Ex:
  </p>
  <pre>
    <code>
      {"    "}[<span className="hljs-name">RoutePrefix</span>(
      <span className="hljs-string">"api/usuarios"</span>)]{"\n"}
      {"    "}public class UsuariosController : BaseController{"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}[<span className="hljs-name">HttpPost</span>]{"\n"}
      {"        "}[<span className="hljs-name">Route</span>(
      <span className="hljs-string">
        "{"{"}id{"}"}"
      </span>
      )]{"\n"}
      {"        "}public IHttpActionResult Put(
      <span className="hljs-name">int</span> id, Usuario usuario){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}try{"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}var existingUsuario = ctx.Usuario.Find(
      <span className="hljs-name">id</span>)
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}if (<span className="hljs-name">existingUsuario</span>{" "}
      == null){"\n"}
      {"                    "}return NotFound()
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}existingUsuario.Nome = usuario.Nome
      <span className="hljs-comment">;</span>
      {"\n"}
      {"                "}existingUsuario.Email = usuario.Email
      <span className="hljs-comment">;</span>
      {"\n"}
      {"                "}existingUsuario.Apelido = usuario.Apelido
      <span className="hljs-comment">;</span>
      {"\n"}
      {"                "}existingUsuario.Senha = usuario.Senha
      <span className="hljs-comment">;</span>
      {"\n"}
      {"                "}existingUsuario.Perfil = usuario.Perfil
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}ctx.SaveChanges()
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}return Ok()<span className="hljs-comment">;</span>
      {"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"            "}catch (<span className="hljs-name">Exception</span> ex)
      {"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}return BadRequest(
      <span className="hljs-name">ex.ToString</span>())
      <span className="hljs-comment">;</span>
      {"\n"}
      {"                "}throw<span className="hljs-comment">;</span>
      {"\n"}
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