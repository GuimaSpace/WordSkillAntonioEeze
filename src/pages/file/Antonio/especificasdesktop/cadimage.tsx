import Image from 'next/image'
import Link from 'next/link'


export default function cadimage() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Selecionar imagem e Cadastra-la:</span>
                <span>
                <>
  <hr />
  <p>Tudo isso no projeto Windows Forms (.Net Framework)</p>
  <ul>
    <li>
      <p>
        primeiramente para coletar a imagem, crie um botão, que abra um dialogo
        para o explotrador de arquivos, adicione um filtro para filtrar os tipos
        de arquivo, e uma verificação que caso a resposta do dialogo for OK ele
        ira alocar a imagem a uma pictureBox, depois de tudo, veremos como
        cadastrar no banco onde a imagem é um varbinary
      </p>
    </li>
    <li>
      <p>
        no botão de selecionar imagem você abrirá o dialogo com filtro, e puxara
        a imagem por caminho, e adiciona a um pictureBox Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">private</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">btnSelec_Click</span>(
            <span className="hljs-params">
              <span className="hljs-keyword">object</span> sender, EventArgs e
            </span>
            ){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}OpenFileDialog flDlg = <span className="hljs-keyword">new</span>{" "}
          OpenFileDialog();{"\n"}
          {"  "}flDlg.Filter ={" "}
          <span className="hljs-string">"Images | *.png; *.jpg"</span>;{"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (flDlg.ShowDialog() ==
          DialogResult.OK){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}picBox.Image = Image.FromFile(flDlg.FileName);{"\n"}
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
        para salvar a imagem no banco de dados vc cria o um novo objeto tipo da
        tabela, e verifica se a pictureBox está com imagem, se não, use uma
        imagem de recurso padrao, se sim, crie uma memory stream, salve a imagem
        da pictureBox como pictureBox.Image.RawFormat com memorystream, atribua
        o objeto tabela.coluna como a memorystring para array, add e savechanges
        Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">private</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">btnSalvar_Click</span>(
            <span className="hljs-params">
              <span className="hljs-keyword">object</span> sender, EventArgs e
            </span>
            ){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (picBox.Image =={" "}
          <span className="hljs-literal">null</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}picBox.Image = Properties.Resources.user;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}Usuario user = <span className="hljs-keyword">new</span>{" "}
          Usuario();{"\n"}
          {"\n"}
          {"  "}MemoryStream ms = <span className="hljs-keyword">new</span>{" "}
          MemoryStream();{"\n"}
          {"  "}picBox.Image.Save(ms, pictureBox.Image.RawFormat);{"\n"}
          {"  "}user.Foto = ms.ToArray;{"\n"}
          {"  "}ctx.Usuario.Add(user);{"\n"}
          {"  "}ctx.SaveChanges();{"\n"}
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