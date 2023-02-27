import Image from 'next/image'
import Link from 'next/link'


export default function permirtirmobile() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Permitir Mobile:</span>
                <span>
                <>
  <hr />
  <p>
    para permitir mobile na sua api, va na pasta do projeto, exiba pastas
    ocultas, .vs, 'nome do projeto', config, applicationhost, dentro do
    applicationhost, pesquise por sites, em um dos sites vai ter um binding
    protocol e information, sobre o uri e sua porta, lá vc adiciona mais uma
    linha, com o endereço de loopback do localhost mobile "127.0.0.1" e troca a
    porta para 5500 Ex:
  </p>
  <pre>
    <code>
      {"                "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">bindings</span>&gt;
      </span>
      {"\n"}
      {"                    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">binding</span>{" "}
        <span className="hljs-attr">protocol</span>=
        <span className="hljs-string">"http"</span>{" "}
        <span className="hljs-attr">bindingInformation</span>=
        <span className="hljs-string">":5500:localhost"</span> /&gt;
      </span>
      {"\n"}
      {"                    "}
      <span className="hljs-tag">
        &lt;<span className="hljs-name">binding</span>{" "}
        <span className="hljs-attr">protocol</span>=
        <span className="hljs-string">"http"</span>{" "}
        <span className="hljs-attr">bindingInformation</span>=
        <span className="hljs-string">":5500:127.0.0.1"</span> /&gt;
      </span>
      {"\n"}
      {"                "}
      <span className="hljs-tag">
        &lt;/<span className="hljs-name">bindings</span>&gt;
      </span>
      {"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}