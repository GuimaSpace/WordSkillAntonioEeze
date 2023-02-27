import Image from 'next/image'
import Link from 'next/link'


export default function alertcaps() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Como avisar caso o capslock esteja ligado:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        para criar um aviso que apareça caso o capslock esteja ligado, basta
        criar uma label "capslock ativado", e deixar sua propriedade visible
        como false, também adicione um timer, adicione a função tick, dentro
        dessa função tick, verifique se o caps está ligado, caso sim, deixa a
        label visivel Ex:
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
          {"  "}label4.Visible = IsKeyLocked(Keys.CapsLock);{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>Não esqueça de dar start no timer ao inicializar Ex:</p>
      <pre>
        <code>
          <span className="hljs-selector-tag">public</span>{" "}
          <span className="hljs-selector-tag">Form1</span>(){"\n"}
          {"{"}
          {"\n"}
          {"  "}
          <span className="hljs-selector-tag">InitializeComponent</span>();
          {"\n"}
          {"  "}
          <span className="hljs-selector-tag">timer1</span>
          <span className="hljs-selector-class">.Start</span>();{"\n"}
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