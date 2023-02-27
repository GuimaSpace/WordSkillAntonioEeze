import Image from 'next/image'
import Link from 'next/link'


export default function filedialog() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">FileDialog com filtro imagem:</span>
                <span>
                <>
  <hr />
  <pre>
    <code>
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">picBox_DoubleClick</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}OpenFileDialog ofd ={" "}
      <span className="hljs-keyword">new</span> OpenFileDialog();{"\n"}
      {"            "}ofd.Filter ={" "}
      <span className="hljs-string">"Images | *.png; *.jpg;"</span>;{"\n"}
      {"            "}
      <span className="hljs-keyword">if</span> (ofd.ShowDialog() ==
      DialogResult.OK){"\n"}
      {"                "}picBox.Image = Image.FromFile(ofd.FileName);{"\n"}
      {"        "}
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