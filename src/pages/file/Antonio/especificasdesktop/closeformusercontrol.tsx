import Image from 'next/image'
import Link from 'next/link'


export default function closeformusercontrol() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Fechar Form pelo UserControl:</span>
                <span>
                <>
  <hr />
  <pre>
    <code>
      {"        "}
      <span className="hljs-keyword">private</span> void btnSair_Click(
      <span className="hljs-keyword">object</span> sender, EventArgs e){"\n"}
      {"        "}
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">if</span> (btnPlay.Text =={" "}
      <span className="hljs-string">"Pause"</span>){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}wmp.controls.stop();{"\n"}
      {"                "}btnPlay.Text ={" "}
      <span className="hljs-string">"Play"</span>;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">this</span>.Hide();{"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">if</span> (
      <span className="hljs-keyword">this</span>.Parent{" "}
      <span className="hljs-keyword">is</span> Panel){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}Panel parentPanel = (Panel)
      <span className="hljs-keyword">this</span>.Parent;{"\n"}
      {"                "}parentPanel.Controls.Remove(
      <span className="hljs-keyword">this</span>);{"\n"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (parentPanel.Parent{" "}
      <span className="hljs-keyword">is</span> Menu){"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}Menu parentForm = (Menu)parentPanel.Parent;{"\n"}
      {"                    "}parentForm.Close();{"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"            "}new Autenticação().Show();{"\n"}
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