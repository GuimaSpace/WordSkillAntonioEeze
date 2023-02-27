import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function especificasweb() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta Especificas Web de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio/especificoweb" linkhref="consumindolistar" title="Consumindo Listar"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="consumidocadastro" title="Consumir Cadastro"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="consumiredicao" title="Consumir Edição"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="criarauth" title="Criar Auth, para que as páginas só apareçam com o usuario logado"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="criarlogin" title="Criar login que adiciona localStorage"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="criarrotas" title="Criar rotas sem o react-router-dom"></FileContainer>
            <FileContainer folder="Antonio/especificoweb" linkhref="logout" title="Logout com LocalStorage"></FileContainer>

            </section>
        </div>
    )
}