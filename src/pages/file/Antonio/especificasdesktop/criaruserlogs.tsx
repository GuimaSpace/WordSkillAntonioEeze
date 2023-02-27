import Image from 'next/image'
import Link from 'next/link'


export default function criaruserlogs() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Criar pasta USER_LOGS sempre que errarem a autenticação:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        aqui será mostrado como criar uma pasta logs, com dataHora, ip, texto,
        para quando uma atenticação for falha, e emitir um som
      </p>
    </li>
    <li>
      <p>
        primeiramente verifique se esta tudo correto com a verificação que
        desejar, no exemplo comparamos os textos com o banco e a [[Verificação
        por foto]] Ex:
      </p>
      <pre>
        <code>
          private void{" "}
          <span className="hljs-keyword">button1_Click(object </span>sender,
          EventArgs e){"\n"}
          {"{"}
          {"\n"}
          {"  "}var user = ctx.Usuario.Where(x =&gt; x.Email == textBox1
          <span className="hljs-meta">.Text</span>{" "}
          <span className="hljs-title">||</span> x.Usuario1 == textBox1
          <span className="hljs-meta">.Text</span>).FirstOrDefault()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}if (user == null){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "Imagem ou usuário não reconhecido"
          </span>
          .Alert()<span className="hljs-comment">;</span>
          {"\n"}
          {"      "}SystemSounds.
          <span className="hljs-keyword">Beep.Play();{"\n"}</span>
          {"      "}return<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">bool </span>comparado =
          CompararImagens(ConverterImagem(pictureBox1.Image), user.Foto)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"  "}if (!comparado){"\n"}
          {"      "}return<span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"  "}logado = user<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}Hide()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}new MainPage().
          <span className="hljs-keyword">Show();{"\n"}</span>
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        após isso, caso a verificação seja falsa, beepe e alerte, e então crie
        variaveis para caminho, e uma pasta para o caminho, puxe data, hora,
        usuario tentado, e o ip, verifique se a pasta e o arquivo ja existem,
        crie se necessario, e adicione os dados em texto Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">private</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">button1_Click</span>(
            <span className="hljs-params">
              <span className="hljs-keyword">object</span> sender, EventArgs e
            </span>
            ){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}[comparação código anterior]{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (!comparado){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-string">
            "Imagem ou usuário não reconhecido"
          </span>
          .Alert();{"\n"}
          {"      "}SystemSounds.Beep.Play();{"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-keyword">string</span> path ={" "}
          <span className="hljs-string">@"C:\USER_LOGS"</span>;{"\n"}
          {"      "}
          <span className="hljs-keyword">string</span> pathFile = path +{" "}
          <span className="hljs-string">
            $@"\
            <span className="hljs-subst">
              {"{"}user.Nome.Split(<span className="hljs-string">' '</span>)[
              <span className="hljs-number">0</span>]{"}"}
            </span>
            <span className="hljs-subst">
              {"{"}user.Codigo{"}"}
            </span>
            .txt"
          </span>
          ;{"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-keyword">var</span> data =
          DateTime.Now.Date.ToString().Split(
          <span className="hljs-string">' '</span>)[
          <span className="hljs-number">0</span>];{"\n"}
          {"      "}
          <span className="hljs-keyword">var</span> hora ={" "}
          <span className="hljs-string">
            $"
            <span className="hljs-subst">
              {"{"}DateTime.Now.Hour{"}"}
            </span>
            :
            <span className="hljs-subst">
              {"{"}DateTime.Now.Minute{"}"}
            </span>
            "
          </span>
          ;{"\n"}
          {"      "}
          <span className="hljs-keyword">var</span> usuario = user.Usuario1;
          {"\n"}
          {"      "}
          <span className="hljs-keyword">var</span> ip =
          Dns.GetHostByName(Dns.GetHostName()).AddressList[
          <span className="hljs-number">0</span>].ToString();{"\n"}
          {"      "}
          <span className="hljs-keyword">if</span> (!Directory.Exists(path))
          {"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}Directory.CreateDirectory(path);{"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"\n"}
          {"      "}
          <span className="hljs-keyword">if</span> (!File.Exists(pathFile))
          {"\n"}
          {"      "}
          {"{"}
          {"\n"}
          {"          "}File.WriteAllText(pathFile,{" "}
          <span className="hljs-string">
            $"Data;Hora;Usuario;IP\n
            <span className="hljs-subst">
              {"{"}data{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}hora{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}usuario{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}ip{"}"}
            </span>
            \n"
          </span>
          );{"\n"}
          {"              "}
          {"}"}
          {"\n"}
          {"          "}
          <span className="hljs-keyword">else</span>
          {"\n"}
          {"          "}
          {"{"}
          {"\n"}
          {"              "}
          <span className="hljs-keyword">var</span> texto =
          File.ReadAllText(pathFile);{"\n"}
          {"              "}File.WriteAllText(pathFile, texto +{" "}
          <span className="hljs-string">
            $"
            <span className="hljs-subst">
              {"{"}data{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}hora{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}usuario{"}"}
            </span>
            ;
            <span className="hljs-subst">
              {"{"}ip{"}"}
            </span>
            \n"
          </span>
          );{"\n"}
          {"          "}
          {"}"}
          {"\n"}
          {"\n"}
          {"          "}
          <span className="hljs-keyword">return</span>;{"\n"}
          {"      "}
          {"}"}
          {"\n"}
          {"  "}logado = user;{"\n"}
          {"  "}Hide();{"\n"}
          {"  "}
          <span className="hljs-keyword">new</span> MainPage().Show();{"\n"}
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