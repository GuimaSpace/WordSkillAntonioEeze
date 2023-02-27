import Image from 'next/image'
import Link from 'next/link'


export default function logout() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Logout com LocalStorage:</span>
                <span>
                <>
  <hr />
  <p>
    como ao logar, é criado um localStorage do usuario que está logado, e as
    páginas só são exibidas caso esse localStorage esteja correto, o logout
    simplesmente remove o locaStorage, basta criar um botão com handleLogout e
    ele remove o localStorage Ex:
  </p>
  <pre>
    <code>
      {"    "}const handleLogout ={" "}
      <span className="hljs-function">
        <span className="hljs-params">()</span> =&gt;
      </span>{" "}
      {"{"}
      {"\n"}
      {"        "}localStorage.removeItem(
      <span className="hljs-string">'usuario'</span>);{"\n"}
      {"        "}
      <span className="hljs-built_in">window</span>.location.reload();{"\n"}
      {"    "}
      {"}"};{"\n"}
    </code>
  </pre>
</>

                </span>
            </div>
        </div>
    )
}