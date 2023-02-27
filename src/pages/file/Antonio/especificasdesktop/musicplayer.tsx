import Image from 'next/image'
import Link from 'next/link'


export default function musicplayer() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Player de musica:</span>
                <span>
                <>
  <hr />
  <p>Use o comando "%USERPROFILE%\Music" no Win+R para a pasta musicas</p>
  <ul>
    <li>
      <p>
        criaremos um player de musica, que puxa musicas da pasta musicas base do
        pc, onde quando o usuario se loga, ele puxa uma musica aleatoria, e tu
        pode pausar ou dar play
      </p>
    </li>
    <li>
      <p>
        primeiramente crie um WindowsMediaPlayer, e o inicie com a pagina e no
        form, adicione a função SetSong() no Form_Load, também precisara criar
        um timer que sera inicializado Ex:
      </p>
    </li>
    <li>
      <p>
        Para adicionar o WMPLib ao seu projeto, você pode seguir os seguintes
        passos:
      </p>
    </li>
    <li>
      <p>Abra o Visual Studio e abra o seu projeto;</p>
    </li>
    <li>
      Clique com o botão direito no nome do projeto no Solution Explorer e
      selecione "Adicionar" -&gt; "Referência...";
    </li>
    <li>
      Na janela de referências, selecione "COM" na lista de tipos de referência;
    </li>
    <li>
      Procure por "Windows Media Player" na lista de componentes e selecione-o;
    </li>
    <li>Clique em "OK" para adicionar a referência ao seu projeto.</li>
  </ul>
  <pre>
    <code>
      WindowsMediaPlayer wmp = <span className="hljs-keyword">new</span>{" "}
      WindowsMediaPlayer();{"\n"}
      {"\n"}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">MainPage</span>(
        <span className="hljs-params" />){"\n"}
      </span>
      {"{"}
      {"\n"}
      {"    "}InitializeComponent();{"\n"}
      {"    "}timer1.Start();{"\n"}
      {"}"}
      {"\n"}
      {"\n"}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">MainPage_Load</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
      </span>
      {"{"}
      {"\n"}
      {"    "}SetSong();{"\n"}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <ul>
    <li>
      <p>
        crie a função SetSong(), lá voce vai criar uma nova playlist, um novo
        randon, e uma ordem que passa um aleatorio menor que 3, crie um caminho
        para as musicas, e escolha usando if e order, passa um foreach que
        escolha a musica dentro do caminho, lá cria uma nova media, e arruma a
        playlista, então puxa atribui a playlist a wmp.currentPlaylist, e pare
        os controles Ex:
      </p>
      <pre>
        <code>
          private void SetSong(){"\n"}
          {"{"}
          {"\n"}
          {"\n"}
          {"  "}var playList = wmp.playlistCollection.newPlaylist(
          <span className="hljs-string">"playlist"</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}
          <span className="hljs-built_in">Random</span> rand = new{" "}
          <span className="hljs-built_in">Random</span>()
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}var <span className="hljs-keyword">order </span>= rand.Next(
          <span className="hljs-number">3</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}string[] musicPath = new string[
          <span className="hljs-number">500</span>]
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}if (<span className="hljs-keyword">order </span>=={" "}
          <span className="hljs-number">0</span>){"\n"}
          {"      "}musicPath ={" "}
          <span className="hljs-keyword">
            Directory.GetFiles(Environment.GetFolderPath(Environment.SpecialFolder.MyMusic),{" "}
          </span>
          <span className="hljs-string">"*.mp3"</span>).
          <span className="hljs-keyword">OrderBy(x </span>=&gt;
          x.Length).ToArray()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}else if (<span className="hljs-keyword">order </span>=={" "}
          <span className="hljs-number">1</span>){"\n"}
          {"      "}musicPath ={" "}
          <span className="hljs-keyword">
            Directory.GetFiles(Environment.GetFolderPath(Environment.SpecialFolder.MyMusic),{" "}
          </span>
          <span className="hljs-string">"*.mp3"</span>).
          <span className="hljs-keyword">OrderByDescending(x </span>=&gt;
          x.Length).ToArray()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}else{"\n"}
          {"      "}musicPath ={" "}
          <span className="hljs-keyword">
            Directory.GetFiles(Environment.GetFolderPath(Environment.SpecialFolder.MyMusic),{" "}
          </span>
          <span className="hljs-string">"*.mp3"</span>)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"\n"}
          {"  "}foreach (var song in musicPath){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}var media = wmp.newMedia(song)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"      "}playList.appendItem(media)
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"  "}wmp.currentPlaylist = playList
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}wmp.controls.stop()<span className="hljs-comment">;</span>
          {"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        faça a função Tick do timer que verifica se tem musica e retornar a
        media/musica Ex:
      </p>
      <pre>
        <code>
          <span className="hljs-function">
            <span className="hljs-keyword">private</span>{" "}
            <span className="hljs-keyword">void</span>{" "}
            <span className="hljs-title">timer1_Tick</span>(
            <span className="hljs-params">
              <span className="hljs-keyword">object</span> sender, EventArgs e
            </span>
            ){"\n"}
          </span>
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (wmp.currentMedia !={" "}
          <span className="hljs-literal">null</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}label5.Text = wmp.currentMedia.name;{"\n"}
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
        adicione funções a botões colocados no form, para dar play, e pause Ex:
      </p>
      <pre>
        <code>
          private void{" "}
          <span className="hljs-keyword">button1_Click(object </span>sender,
          EventArgs e){"\n"}
          {"{"}
          {"\n"}
          {"  "}if (<span className="hljs-keyword">button1.Text </span>=={" "}
          <span className="hljs-string">"Play"</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}wmp.controls.play()<span className="hljs-comment">;</span>
          {"\n"}
          {"      "}
          <span className="hljs-keyword">button1.Text </span>={" "}
          <span className="hljs-string">"Pause"</span>
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"  "}else{"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}wmp.controls.
          <span className="hljs-keyword">pause();{"\n"}</span>
          {"      "}
          <span className="hljs-keyword">button1.Text </span>={" "}
          <span className="hljs-string">"Play"</span>
          <span className="hljs-comment">;</span>
          {"\n"}
          {"  "}
          {"}"}
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