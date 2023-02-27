import Image from 'next/image'
import Link from 'next/link'


export default function saudacaohora() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Saudações de acordo com o horario:</span>
                <span>
                <>
  <hr />
  <ul>
    <li>
      <p>
        aqui vera como dar saudações de acordo com o horario, e mostrar horario,
        boa tarde dos 12 as 18, boa noite das 18 as 00, boa madrugada das 00 as
        4, bom dia das 4 as 12, isso com o nome do usuario ao lado (no exemplo,
        trazemos o nome do usuario de outro form), e podendo mudar de acordo com
        a lingua
      </p>
    </li>
    <li>
      <p>
        primeira de tudo, no form_load adicione a função que fara isso, no caso
        ShowHour() Ex:
      </p>
      <pre>
        <code>
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
          {"  "}ShowHour();{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        crie a função ShoHour da seguinte maneira dando saudação com a hora, e
        dependendo da lingua com o nome do usuario logado, uma label para a
        hora, outra para salvação
      </p>
      <pre>
        <code>
          private void ShowHour(){"\n"}
          {"{"}
          {"\n"}
          {"  "}label1.<span className="hljs-attr">Text</span> = $
          <span className="hljs-string">"{"{"}DateTime.Now.ToString("</span>
          HH:mm<span className="hljs-string">"){"}"}"</span>;{"\n"}
          {"  "}var <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">""</span>;{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (DateTime.Now.Hour &lt;{" "}
          <span className="hljs-number">4</span>){"\n"}
          {"      "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Boa madrugada"</span>;{"\n"}
          {"  "}
          <span className="hljs-keyword">else</span>{" "}
          <span className="hljs-keyword">if</span> (DateTime.Now.Hour &lt;{" "}
          <span className="hljs-number">12</span>){"\n"}
          {"      "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Bom dia"</span>;{"\n"}
          {"  "}
          <span className="hljs-keyword">else</span>{" "}
          <span className="hljs-keyword">if</span> (DateTime.Now.Hour &lt;{" "}
          <span className="hljs-number">18</span>){"\n"}
          {"      "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Boa tarde"</span>;{"\n"}
          {"  "}
          <span className="hljs-keyword">else</span>
          {"\n"}
          {"      "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Boa noite"</span>;{"\n"}
          {"\n"}
          {"  "}
          <span className="hljs-keyword">if</span> (lang !={" "}
          <span className="hljs-string">"pt"</span>){"\n"}
          {"  "}
          {"{"}
          {"\n"}
          {"      "}
          <span className="hljs-keyword">if</span> (
          <span className="hljs-attr">greeting</span> =={" "}
          <span className="hljs-string">"Boa madrugada"</span>){"\n"}
          {"          "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Good sun-up"</span>;{"\n"}
          {"      "}
          <span className="hljs-keyword">else</span>{" "}
          <span className="hljs-keyword">if</span> (
          <span className="hljs-attr">greeting</span> =={" "}
          <span className="hljs-string">"Bom dia"</span>){"\n"}
          {"          "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Good morning"</span>;{"\n"}
          {"      "}
          <span className="hljs-keyword">else</span>{" "}
          <span className="hljs-keyword">if</span> (
          <span className="hljs-attr">greeting</span> =={" "}
          <span className="hljs-string">"Boa tarde"</span>){"\n"}
          {"          "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Good afternoon"</span>;{"\n"}
          {"      "}
          <span className="hljs-keyword">else</span>
          {"\n"}
          {"          "}
          <span className="hljs-attr">greeting</span> ={" "}
          <span className="hljs-string">"Good evening"</span>;{"\n"}
          {"  "}
          {"}"}
          {"\n"}
          {"\n"}
          {"  "}label2.<span className="hljs-attr">Text</span> = $
          <span className="hljs-string">
            "{"{"}greeting{"}"} {"{"}logado.Nome{"}"}"
          </span>
          ;{"\n"}
          {"}"}
          {"\n"}
        </code>
      </pre>
    </li>
    <li>
      <p>
        é interessante também que o relogio va mudando a hora e minutos conforme
        passa, então é só voce adicionar um timer que puxa a função ShowHour, e
        puxar a função no formLoad Ex: ``` private void MainPage_Load(object
        sender, EventArgs e)
        {"{"}
        ShowHour();
        {"}"}
      </p>
    </li>
  </ul>
  <p>
    private void timer1_Tick(object sender, EventArgs e)
    {"{"}
    ShowHour();
    {"}"}
    ```
  </p>
</>

                </span>
            </div>
        </div>
    )
}