import Image from 'next/image'
import Link from 'next/link'


export default function loginbasico() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Login Basico:</span>
                <span>
                <>
  <hr />
  <p>
    para fazer um login basico, adicione a model a sua api, faça toda a
    configuração basica, vá para controllers, e crie um BaseController, onde seu
    contexto será definido como publico pra poder ser acessado por outros
    controllers Ex:
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-class">
        <span className="hljs-keyword">class</span>{" "}
        <span className="hljs-title">BaseController</span> :{" "}
        <span className="hljs-title">ApiController</span>
        {"\n"}
        {"    "}
      </span>
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span> SessaoMobileEntities ctx ={" "}
      <span className="hljs-keyword">new</span>{" "}
      <span className="hljs-type">SessaoMobileEntities</span>();{"\n"}
      {"    "}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <p>
    para o login crie uma classe chamada LoginController dentro da pasta
    controllers, defina um prefixo de rota para o cotnroller, faça ele
    dependente do BaseController, abra um método Post, com o nome de login, ele
    recebe o usuario, verifica se corresponde com os dados no banco, se sim
    retorna ok se não badRequest, Ex:
  </p>
  <pre>
    <code>
      {"    "}[<span className="hljs-name">RoutePrefix</span>(
      <span className="hljs-string">"api/login"</span>)]{"\n"}
      {"    "}public class LoginController : BaseController{"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}[<span className="hljs-name">HttpPost</span>]{"\n"}
      {"        "}public IHttpActionResult Login(
      <span className="hljs-name">Usuario</span> user){"\n"}
      {"        "}
      {"{"}
      {"  "}
      {"\n"}
      {"            "}try{"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}var usuario = ctx.Usuario.Where(
      <span className="hljs-name">x</span> =&gt; x.email == user.email
      &amp;&amp; x.senha == user.senha).FirstOrDefault()
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}if (<span className="hljs-name">usuario</span> ==
      null){"\n"}
      {"                    "}return NotFound()
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}
      {"                "}return Ok(<span className="hljs-name">usuario</span>)
      <span className="hljs-comment">;</span>
      {"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}catch(<span className="hljs-name">Exception</span> ex)
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