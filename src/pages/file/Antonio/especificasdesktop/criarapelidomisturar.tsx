import Image from 'next/image'
import Link from 'next/link'


export default function criarapelido() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Criar apelido, misturar txt com data:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        veja como criar um "apelido" misturando por exemplo o nome e o sobrenome
        de um txtBox com os anos de um dataTimePicker ao clicar em um botão
        gerar apelido
      </p>
    </li>
    <li>
      <p>
        primeiramente verifique se o textBox não está vazio, se estiver vazio de
        um return Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">private</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">button3_Click</span>(
            <span className="hljs-params">
              <span className="hljs-keyword">object</span> sender, EventArgs e
            </span>
            ){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (textBox1.Text =={" "}
          <span className="hljs-string">""</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "É preciso preencher o campo Nome para gerar apelido"
          </span>
          .Alert();{"\n"}
          {"      "}
          <span className="hljs-keyword">return</span>;{"\n"}
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
        apos isso crie uma variavel nomes, que separa o txtBox por espaço, e uma
        string apelido, para ser preenchida, com isso, teste se tem pelo menso 2
        nomes, se sim, adicione os nomes ao apelido com a formatação pedida,
        como 1nome.2nome.yy Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">private</span> void
          button3_Click(object sender, EventArgs e){"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (textBox1.Text =={" "}
          <span className="hljs-string">""</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "É preciso preencher o campo Nome para gerar apelido"
          </span>
          .Alert();{"\n"}
          {"      "}return;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span>[] nomes = textBox1.Text.
          <span className="hljs-built_in">Split</span>(
          <span className="hljs-comment">' ');</span>
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> apelido ={" "}
          <span className="hljs-string">""</span>;{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> primeiroNomeSemAcentos =
          nomes[<span className="hljs-number">0</span>].ToLowerInvariant().
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"á"</span>,{" "}
          <span className="hljs-string">"a"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"é"</span>,{" "}
          <span className="hljs-string">"e"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"í"</span>,{" "}
          <span className="hljs-string">"i"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ó"</span>,{" "}
          <span className="hljs-string">"o"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ú"</span>,{" "}
          <span className="hljs-string">"u"</span>);{"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> ultimoNomeSemAcentos =
          nomes.Last().ToLowerInvariant().
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"á"</span>,{" "}
          <span className="hljs-string">"a"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"é"</span>,{" "}
          <span className="hljs-string">"e"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"í"</span>,{" "}
          <span className="hljs-string">"i"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ó"</span>,{" "}
          <span className="hljs-string">"o"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ú"</span>,{" "}
          <span className="hljs-string">"u"</span>);{"\n"}
          {"\n"}
          {"  "}apelido = $
          <span className="hljs-string">
            "{"{"}primeiroNomeSemAcentos{"}"}.{"{"}ultimoNomeSemAcentos{"}"}
            {"{"}dateTimePicker1.Value.ToString("
          </span>
          yy<span className="hljs-string">"){"}"}"</span>;{"\n"}
          {"  "}var user = ctx.Usuario.Where(x =&gt; x.Usuario1 ==
          apelido).FirstOrDefault();{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (nomes.Length &gt;{" "}
          <span className="hljs-number">2</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">else</span> {"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "Não foi possível gerar aleatório"
          </span>
          .Alert();{"\n"}
          {"      "}return;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}textBox4.Text = apelido;{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        é importante verificar esse apelido não é usado no banco de dados, se
        for usado tentar recriar o apelido, mas desta vez com o sobrenome, e
        caso não der, simpleste avisar que não foi possivel Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-keyword">private</span> void
          button3_Click(object sender, EventArgs e){"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (textBox1.Text =={" "}
          <span className="hljs-string">""</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "É preciso preencher o campo Nome para gerar apelido"
          </span>
          .Alert();{"\n"}
          {"      "}return;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span>[] nomes = textBox1.Text.
          <span className="hljs-built_in">Split</span>(
          <span className="hljs-comment">' ');</span>
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> apelido ={" "}
          <span className="hljs-string">""</span>;{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> primeiroNomeSemAcentos =
          nomes[<span className="hljs-number">0</span>].ToLowerInvariant().
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"á"</span>,{" "}
          <span className="hljs-string">"a"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"é"</span>,{" "}
          <span className="hljs-string">"e"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"í"</span>,{" "}
          <span className="hljs-string">"i"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ó"</span>,{" "}
          <span className="hljs-string">"o"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ú"</span>,{" "}
          <span className="hljs-string">"u"</span>);{"\n"}
          {"  "}
          <span className="hljs-built_in">string</span> ultimoNomeSemAcentos =
          nomes.Last().ToLowerInvariant().
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"á"</span>,{" "}
          <span className="hljs-string">"a"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"é"</span>,{" "}
          <span className="hljs-string">"e"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"í"</span>,{" "}
          <span className="hljs-string">"i"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ó"</span>,{" "}
          <span className="hljs-string">"o"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ú"</span>,{" "}
          <span className="hljs-string">"u"</span>);{"\n"}
          {"\n"}
          {"  "}apelido = $
          <span className="hljs-string">
            "{"{"}primeiroNomeSemAcentos{"}"}.{"{"}ultimoNomeSemAcentos{"}"}
            {"{"}dateTimePicker1.Value.ToString("
          </span>
          yy<span className="hljs-string">"){"}"}"</span>;{"\n"}
          {"  "}var user = ctx.Usuario.Where(x =&gt; x.Usuario1 ==
          apelido).FirstOrDefault();{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (nomes.Length &gt;{" "}
          <span className="hljs-number">2</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-keyword">if</span> (user !={" "}
          <span className="hljs-literal">null</span>){"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}
          <span className="hljs-built_in">string</span> penultimoNomeSemAcentos
          = nomes[nomes.Length - <span className="hljs-number">2</span>
          ].ToLowerInvariant().<span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"á"</span>,{" "}
          <span className="hljs-string">"a"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"é"</span>,{" "}
          <span className="hljs-string">"e"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"í"</span>,{" "}
          <span className="hljs-string">"i"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ó"</span>,{" "}
          <span className="hljs-string">"o"</span>).
          <span className="hljs-built_in">Replace</span>(
          <span className="hljs-string">"ú"</span>,{" "}
          <span className="hljs-string">"u"</span>);{"\n"}
          {"          "}apelido = $
          <span className="hljs-string">
            "{"{"}penultimoNomeSemAcentos{"}"}.{"{"}ultimoNomeSemAcentos{"}"}
            {"{"}dateTimePicker1.Value.ToString("
          </span>
          yy<span className="hljs-string">"){"}"}"</span>;{"\n"}
          {"          "}user = ctx.Usuario.Where(x =&gt; x.Usuario1 ==
          apelido).FirstOrDefault();{"\n"}
          {"          "}
          <span className="hljs-keyword">if</span> (user !={" "}
          <span className="hljs-literal">null</span>){"\n"}
          {"          "}
          {"{"}
          {"\n"}
          {"              "}
          <span className="hljs-string">
            "Não foi possível gerar aleatório"
          </span>
          .Alert();{"\n"}
          {"              "}return;{"\n"}
          {"          "}
          {"}"}
          {"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">else</span>
          {"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "Não foi possível gerar aleatório"
          </span>
          .Alert();{"\n"}
          {"      "}return;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}textBox4.Text = apelido;{"\n"}
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