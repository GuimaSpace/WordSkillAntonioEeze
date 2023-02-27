import Image from 'next/image'
import Link from 'next/link'


export default function cadastrobasico() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Cadastro Básico:</span>
                <span>
                <>
                <hr />
                <p>
                    para fazer cadastro basta criar um post que adiciona um novo user no banco
                    de dados, esse user é entregado pelo consumo no front-end Ex
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
                    {"        "}public IHttpActionResult Post(
                    <span className="hljs-name">Usuario</span> user){"\n"}
                    {"        "}
                    {"{"}
                    {"\n"}
                    {"            "}try{"\n"}
                    {"            "}
                    {"{"}
                    {"\n"}
                    {"                "}ctx.Usuario.Add(
                    <span className="hljs-name">user</span>)
                    <span className="hljs-comment">;</span>
                    {"\n"}
                    {"                "}user.Bloqueado = false
                    <span className="hljs-comment">;</span>
                    {"\n"}
                    {"                "}ctx.SaveChanges()
                    <span className="hljs-comment">;</span>
                    {"\n"}
                    {"\n"}
                    {"                "}return Created(<span className="hljs-name">$</span>
                    <span className="hljs-string">
                        "{"{"}Request.RequestUri{"}"}/{"{"}user.Id{"}"}"
                    </span>
                    , user)<span className="hljs-comment">;</span>
                    {"\n"}
                    {"            "}
                    {"}"}
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