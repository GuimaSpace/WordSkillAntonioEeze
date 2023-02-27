import Image from 'next/image'
import Link from 'next/link'


export default function useparent() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Verificação por foto:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        oq seria uma verificação por foto? basicamente é usar a foto como senha,
        o usuario selecionara a foto, ela será comparada com a do banco de
        dados, se corresponder é verificado
      </p>
    </li>
    <li>
      <p>
        primeiramente a função do botão que verifica comparando os dados do
        txtbox e o da imagem a partir de um metodo, que converte a imagem da
        picbox para o tipo do bd e , caso for falso beepa e retorna, caso tudo
        ok ele loga Ex: ``` private void button1_Click(object sender, EventArgs
        e)
        {"{"}
        var user = ctx.Usuario.Where(x =&gt; x.Usuario1 ==
        textBox1.Text).FirstOrDefault(); if (user == null)
        {"{"}
      </p>
      <pre>
        <code>
          {"  "}
          <span className="hljs-string">
            "Imagem ou usuário não reconhecido"
          </span>
          .Alert()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}SystemSounds.Beep.Play()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}return<span className="hljs-comment">;</span>
          {"\n"}
        </code>
      </pre>
      <p> {"}"}</p>
      <p>
        {" "}
        bool comparado = CompararImagens(ConverterImagem(pictureBox1.Image),
        user.Foto);
      </p>
      <p>
        {" "}
        if (!comparado)
        {"{"}
      </p>
      <pre>
        <code>
          {"  "}
          <span className="hljs-string">
            "Imagem ou usuário não reconhecido"
          </span>
          .Alert()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}SystemSounds.Beep.Play()<span className="hljs-comment">;</span>
          {"\n"}
          {"  "}return<span className="hljs-comment">;</span>
          {"\n"}
        </code>
      </pre>
      <p> {"}"}</p>
      <p>
        {" "}
        logado = user; Hide(); new MainPage().Show();
        {"}"}
      </p>
    </li>
  </ul>
  <pre>
    <code>
      {"\n"}- o metdodo para converter{" "}
      <span className="hljs-selector-tag">a</span> imagem da picture box e
      comparar é o seguinte Ex:{"\n"}
    </code>
  </pre>
  <pre>
    <code>
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">byte</span>[]{" "}
        <span className="hljs-title">ConverterImagem</span>(
        <span className="hljs-params">Image image</span>){"\n"}
      </span>
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">var</span> ms ={" "}
      <span className="hljs-keyword">new</span> MemoryStream();{"\n"}
      {"    "}pictureBox1.Image.Save(ms, image.RawFormat);{"\n"}
      {"    "}
      <span className="hljs-keyword">return</span> ms.ToArray();{"\n"}
      {"}"}
      {"\n"}
      {"\n"}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">bool</span>{" "}
        <span className="hljs-title">CompararImagens</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">byte</span>[] bytes,{" "}
          <span className="hljs-keyword">byte</span>[] foto
        </span>
        ){"\n"}
      </span>
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-keyword">return</span>{" "}
      Enumerable.SequenceEqual(bytes, foto);{"\n"}
      {"}"}
      {"\n"}
    </code>
  </pre>
  <pre>
    <code>
      {"\n"}
      <span className="hljs-bullet">- </span>tudo junto fica assim Ex:{"\n"}
    </code>
  </pre>
  <p>
    private void button1_Click(object sender, EventArgs e)
    {"{"}
    var user = ctx.Usuario.Where(x =&gt; x.Usuario1 ==
    textBox1.Text).FirstOrDefault(); if (user == null)
    {"{"}
    "Imagem ou usuário não reconhecido".Alert(); SystemSounds.Beep.Play();
    return;
    {"}"}
  </p>
  <pre>
    <code>
      <span className="hljs-keyword">bool </span>comparado =
      CompararImagens(ConverterImagem(pictureBox1.Image), user.Foto)
      <span className="hljs-comment">;</span>
      {"\n"}
      {"\n"}if (!comparado){"\n"}
      {"{"}
      {"\n"}
      {"    "}
      <span className="hljs-string">"Imagem ou usuário não reconhecido"</span>
      .Alert()<span className="hljs-comment">;</span>
      {"\n"}
      {"    "}SystemSounds.
      <span className="hljs-keyword">Beep.Play();{"\n"}</span>
      {"    "}return<span className="hljs-comment">;</span>
      {"\n"}
      {"}"}
      {"\n"}
      {"\n"}logado = user<span className="hljs-comment">;</span>
      {"\n"}Hide()<span className="hljs-comment">;</span>
      {"\n"}new MainPage().<span className="hljs-keyword">Show();</span>
      {"\n"}
    </code>
  </pre>
  <p>{"}"}</p>
  <p>
    private byte[] ConverterImagem(Image image)
    {"{"}
    var ms = new MemoryStream(); pictureBox1.Image.Save(ms, image.RawFormat);
    return ms.ToArray();
    {"}"}
  </p>
  <p>
    private bool CompararImagens(byte[] bytes, byte[] foto)
    {"{"}
    return Enumerable.SequenceEqual(bytes, foto);
    {"}"}
    ```
  </p>
</>

                </span>
            </div>
        </div>
    )
}