import Image from 'next/image'
import Link from 'next/link'


export default function alinhamentoteste() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Alinhamentos e Teste Unitario:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        para realizar o teste unitario é muito simples, crie um Projeto de Teste
        de Unidade(.NET Framework)
      </p>
    </li>
    <li>
      <p>após isso traga o seu banco de dados</p>
      <p>
        {" "}
        para fazer a conexão da aplicação com o banco de dados é necessario
        clicar com botar direito no projeto base -&gt; adicionar item, Dados(Na
        aba lateral) -&gt; ADO.NET Entity Data Model -&gt; EF Designer from
        database -&gt; new connection -&gt; Microsoft SQL Server -&gt; Nome do
        servidor: .\sqlexpress -&gt; Selecionar o banco de dados -&gt; Ok -&gt;
        Next -&gt; Next -&gt; Selecionar as tabelas a adicionar -&gt; Concluir
      </p>
    </li>
    <li>
      <p>traga o contexto do seu banco de dados acima do [TestMethod] Ex:</p>
      <pre>
        <code>
          <span className="hljs-attribute">MUNDIALTESTEEntities ctx</span> = new
          MUNDIALTESTEEntities();{"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        dentro do TestMethod abra um try catch, com Exception ex dentro do try
        coloque um Assert.IsTrue(true), e no catch false Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">public</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">TestMethod1</span>
            <span className="hljs-params">()</span>
            {"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">try</span>
          {"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}Assert.IsTrue(<span className="hljs-literal">true</span>);
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">catch</span> (Exception ex) {"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}Assert.IsTrue(<span className="hljs-literal">false</span>);
          {"\n"}
          {"      "}
          <span className="hljs-keyword">throw</span>;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        depois disso, dentro do try faça o que se pede, como apagar os dados de
        uma tabela, resetar a sua semente de identidade, salvar aterações, e
        adicionar um for, para inserir os dados com os valores pedidos ao banco,
        salve alterações Ex:
      </p>
      <pre>
        <code>
          [<span className="hljs-name">TestClass</span>]{"\n"}public class
          UnitTest1{"\n"}
          {"{"}
          {"\n"}
          {"  "}MUNDIALTESTEEntities ctx = new MUNDIALTESTEEntities()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}[<span className="hljs-name">TestMethod</span>]{"\n"}
          {"  "}public void TestMethod1(){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}try{"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}ctx.GruposAtivo.RemoveRange(
          <span className="hljs-name">ctx.GruposAtivo</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}ctx.Database.ExecuteSqlCommand(
          <span className="hljs-string">
            "DBCC CHECKIDENT ('GruposAtivo', RESEED, 0)"
          </span>
          )<span className="hljs-comment">;</span>
          {"\n"}
          {"          "}ctx.SaveChanges()<span className="hljs-comment">;</span>
          {"\n"}
          {"          "}for (<span className="hljs-name">int</span> i ={" "}
          <span className="hljs-number">1</span>
          <span className="hljs-comment">; i &lt; 6; i++)</span>
          {"\n"}
          {"          "}
          {"{"}
          {"\n"}
          {"              "}GruposAtivo grupoAtivo = new GruposAtivo()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"              "}grupoAtivo.Nome ={" "}
          <span className="hljs-string">"GrupoAtivo"</span> + i.ToString()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"              "}ctx.GruposAtivo.Add(
          <span className="hljs-name">grupoAtivo</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"              "}ctx.SaveChanges()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}
          {"}"}
          {"\n"}
          {"          "}Assert.IsTrue(<span className="hljs-name">true</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"      "}catch (<span className="hljs-name">Exception</span> ex){" "}
          {"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}Assert.IsTrue(<span className="hljs-name">false</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"          "}throw<span className="hljs-comment">;</span>
          {"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"  "}
          {"}"}
          {"   "}
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        ao finalizar, rode o teste, clicando na base do projeto com o botão
        direito e executar teste
      </p>
    </li>
  </ul>
</>

                </span>
            </div>
        </div>
    )
}