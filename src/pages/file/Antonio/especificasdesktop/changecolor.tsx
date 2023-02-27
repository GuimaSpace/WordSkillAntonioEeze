import Image from 'next/image'
import Link from 'next/link'


export default function changecolor() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Trocar Cores:</span>
                <span>
                <>
  <hr />
  <p>
    aqui veremos como trocar cores por um formulario que tem txtBox em Hex, em
    RGB, e por colordialog
  </p>
  <pre>
    <code>
      {"    "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">partial</span>{" "}
      <span className="hljs-keyword">class</span>{" "}
      <span className="hljs-title">Cores</span> :{" "}
      <span className="hljs-title">Form</span>
      {"\n"}
      {"    "}
      {"{"}
      {"\n"}
      {"        "}
      <span className="hljs-keyword">public</span>{" "}
      <span className="hljs-keyword">static</span> Cores instance;{"\n"}
      {"        "}
      <span className="hljs-keyword">public</span> Color selecionada;{"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">int</span> R;{"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">int</span> G;{"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">int</span> B;{"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">bool</span> HexOn;{"\n"}
      {"        "}
      <span className="hljs-keyword">private</span>{" "}
      <span className="hljs-keyword">bool</span> RGBOn;{"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">public</span>{" "}
        <span className="hljs-title">Cores</span>(
        <span className="hljs-params">Color background</span>){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}InitializeComponent();{"\n"}
      {"            "}instance = <span className="hljs-keyword">this</span>;
      {"\n"}
      {"            "}
      <span className="hljs-keyword">this</span>.BackColor = background;{"\n"}
      {"            "}R = background.R;{"\n"}
      {"            "}G = background.G;{"\n"}
      {"            "}B = background.B;{"\n"}
      {"            "}txtHex.Text = <span className="hljs-string">"#"</span> +
      R.ToString(<span className="hljs-string">"X2"</span>) + G.ToString(
      <span className="hljs-string">"X2"</span>) + B.ToString(
      <span className="hljs-string">"X2"</span>);{"\n"}
      {"            "}txtRGB.Text = R +{" "}
      <span className="hljs-string">", "</span> + G +{" "}
      <span className="hljs-string">", "</span> + B;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">btnSelec_Click</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}ColorDialog colorDlg ={" "}
      <span className="hljs-keyword">new</span> ColorDialog();{"\n"}
      {"            "}
      <span className="hljs-keyword">try</span>
      {"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (colorDlg.ShowDialog() ==
      DialogResult.OK){"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}Color colorSelec = colorDlg.Color;{"\n"}
      {"                    "}R = colorSelec.R;{"\n"}
      {"                    "}G = colorSelec.G;{"\n"}
      {"                    "}B = colorSelec.B;{"\n"}
      {"                    "}txtHex.Text ={" "}
      <span className="hljs-string">"#"</span> + R.ToString(
      <span className="hljs-string">"X2"</span>) + G.ToString(
      <span className="hljs-string">"X2"</span>) + B.ToString(
      <span className="hljs-string">"X2"</span>);{"\n"}
      {"                    "}txtRGB.Text = R +{" "}
      <span className="hljs-string">", "</span> + G +{" "}
      <span className="hljs-string">", "</span> + B;{"\n"}
      {"                    "}selecionada = colorSelec;{"\n"}
      {"                    "}
      <span className="hljs-keyword">if</span>{" "}
      (Application.OpenForms.OfType&lt;Cores&gt;().Count() &gt;{" "}
      <span className="hljs-number">0</span>){"\n"}
      {"                    "}
      {"{"}
      {"\n"}
      {"                        "}Cores.instance.BackColor = selecionada;{"\n"}
      {"                    "}
      {"}"}
      {"\n"}
      {"                    "}Form1.instance.BackColor = selecionada;{"\n"}
      {"                    "}
      <span className="hljs-keyword">if</span>{" "}
      (Application.OpenForms.OfType&lt;Cadastro&gt;().Count() &gt;{" "}
      <span className="hljs-number">0</span>){"\n"}
      {"                    "}
      {"{"}
      {"\n"}
      {"                        "}Cadastro.instance.BackColor = selecionada;
      {"\n"}
      {"                    "}
      {"}"}
      {"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">catch</span> (Exception){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}MessageBox.Show(
      <span className="hljs-string">"Selecione uma cor valida!"</span>,{" "}
      <span className="hljs-string">"Alerta"</span>, MessageBoxButtons.OK,
      MessageBoxIcon.Exclamation);{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"                "}
      <span className="hljs-keyword">throw</span>;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">txtHex_KeyDown</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, KeyEventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}HexOn = <span className="hljs-literal">true</span>;{"\n"}
      {"            "}RGBOn = <span className="hljs-literal">false</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">txtRGB_KeyDown</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, KeyEventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}HexOn = <span className="hljs-literal">false</span>;{"\n"}
      {"            "}RGBOn = <span className="hljs-literal">true</span>;{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">txtHexOrRGB_Leave</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">try</span>
      {"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (HexOn =={" "}
      <span className="hljs-literal">true</span>){"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">if</span> (txtHex.Text !={" "}
      <span className="hljs-string">""</span> || txtHex.Text ==
      Convert.ToString(selecionada) || txtHex.Text == selecionada.R.ToString(
      <span className="hljs-string">"X2"</span>) + selecionada.G.ToString(
      <span className="hljs-string">"X2"</span>) + selecionada.B.ToString(
      <span className="hljs-string">"X2"</span>)){"\n"}
      {"                    "}
      {"{"}
      {"\n"}
      {"                        "}
      <span className="hljs-keyword">string</span> HEX = txtHex.Text;{"\n"}
      {"                        "}Color HexToRgb ={" "}
      <span className="hljs-keyword">new</span> Color();{"\n"}
      {"                        "}HexToRgb = ColorTranslator.FromHtml(HEX);
      {"\n"}
      {"                        "}R = HexToRgb.R;{"\n"}
      {"                        "}G = HexToRgb.G;{"\n"}
      {"                        "}B = HexToRgb.B;{"\n"}
      {"                        "}txtRGB.Text = R +{" "}
      <span className="hljs-string">", "</span> + G +{" "}
      <span className="hljs-string">", "</span> + B;{"\n"}
      {"                        "}selecionada = Color.FromArgb(R, G, B);{"\n"}
      {"                    "}
      {"}"}
      {"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"\n"}
      {"                "}
      <span className="hljs-keyword">if</span> (RGBOn =={" "}
      <span className="hljs-literal">true</span>){"\n"}
      {"                "}
      {"{"}
      {"\n"}
      {"                    "}
      <span className="hljs-keyword">if</span> (txtRGB.Text !={" "}
      <span className="hljs-string">""</span> || txtRGB.Text ==
      Convert.ToString(selecionada)){"\n"}
      {"                    "}
      {"{"}
      {"\n"}
      {"                        "}
      <span className="hljs-keyword">string</span> RGB = txtRGB.Text;{"\n"}
      {"                        "}
      <span className="hljs-keyword">string</span>[] numbers = RGB.Split(
      <span className="hljs-string">','</span>);{"\n"}
      {"                        "}
      <span className="hljs-keyword">int</span> auxiliar ={" "}
      <span className="hljs-number">0</span>;{"\n"}
      {"                        "}
      <span className="hljs-keyword">while</span> (auxiliar &lt;{" "}
      <span className="hljs-number">3</span>){"\n"}
      {"                        "}
      {"{"}
      {"\n"}
      {"                            "}
      <span className="hljs-keyword">foreach</span> (
      <span className="hljs-keyword">var</span> number{" "}
      <span className="hljs-keyword">in</span> numbers){"\n"}
      {"                            "}
      {"{"}
      {"\n"}
      {"                                "}auxiliar++;{"\n"}
      {"                                "}
      <span className="hljs-keyword">if</span> (auxiliar =={" "}
      <span className="hljs-number">1</span>){"\n"}
      {"                                "}
      {"{"}
      {"\n"}
      {"                                    "}R = Convert.ToInt32(number);{"\n"}
      {"                                "}
      {"}"}
      {"\n"}
      {"                                "}
      <span className="hljs-function">
        <span className="hljs-keyword">else</span>{" "}
        <span className="hljs-title">if</span> (
        <span className="hljs-params">
          auxiliar == <span className="hljs-number">2</span>
        </span>
        ){"\n"}
        {"                                "}
      </span>
      {"{"}
      {"\n"}
      {"                                    "}G = Convert.ToInt32(number);{"\n"}
      {"                                "}
      {"}"}
      {"\n"}
      {"                                "}
      <span className="hljs-function">
        <span className="hljs-keyword">else</span>{" "}
        <span className="hljs-title">if</span> (
        <span className="hljs-params">
          auxiliar == <span className="hljs-number">3</span>
        </span>
        ){"\n"}
        {"                                "}
      </span>
      {"{"}
      {"\n"}
      {"                                    "}B = Convert.ToInt32(number);{"\n"}
      {"                                "}
      {"}"}
      {"\n"}
      {"\n"}
      {"                            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"                            "}txtHex.Text ={" "}
      <span className="hljs-string">"#"</span> + R.ToString(
      <span className="hljs-string">"X2"</span>) + G.ToString(
      <span className="hljs-string">"X2"</span>) + B.ToString(
      <span className="hljs-string">"X2"</span>);{"\n"}
      {"                            "}selecionada = Color.FromArgb(R, G, B);
      {"\n"}
      {"                        "}
      {"}"}
      {"\n"}
      {"                    "}
      {"}"}
      {"\n"}
      {"                "}
      {"}"}
      {"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">catch</span> (Exception){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}MessageBox.Show(
      <span className="hljs-string">"Digite uma cor valida!"</span>,{" "}
      <span className="hljs-string">"Alerta"</span>, MessageBoxButtons.OK,
      MessageBoxIcon.Exclamation);{"\n"}
      {"                "}
      <span className="hljs-keyword">return</span>;{"\n"}
      {"                "}
      <span className="hljs-keyword">throw</span>;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">if</span>{" "}
      (Application.OpenForms.OfType&lt;Cores&gt;().Count() &gt;{" "}
      <span className="hljs-number">0</span>){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}Cores.instance.BackColor = selecionada;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"            "}Form1.instance.BackColor = selecionada;{"\n"}
      {"            "}
      <span className="hljs-keyword">if</span>{" "}
      (Application.OpenForms.OfType&lt;Cadastro&gt;().Count() &gt;{" "}
      <span className="hljs-number">0</span>){"\n"}
      {"            "}
      {"{"}
      {"\n"}
      {"                "}Cadastro.instance.BackColor = selecionada;{"\n"}
      {"            "}
      {"}"}
      {"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">Cores_Click</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}txtHexOrRGB_Leave(
      <span className="hljs-literal">true</span>, e);{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"\n"}
      {"        "}
      <span className="hljs-function">
        <span className="hljs-keyword">private</span>{" "}
        <span className="hljs-keyword">void</span>{" "}
        <span className="hljs-title">btnSalvar_Click</span>(
        <span className="hljs-params">
          <span className="hljs-keyword">object</span> sender, EventArgs e
        </span>
        ){"\n"}
        {"        "}
      </span>
      {"{"}
      {"\n"}
      {"            "}
      <span className="hljs-keyword">this</span>.Close();{"\n"}
      {"        "}
      {"}"}
      {"\n"}
      {"    "}
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