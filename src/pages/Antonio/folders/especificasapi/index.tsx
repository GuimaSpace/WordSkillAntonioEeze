import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function especificasapi() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta Especificas API de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio/especificasapi" linkhref="cadastrobasico" title="Cadastro Básico"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="configuracoesbase" title="Configurações Base para API"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="edicaobasica" title="Edições Basica"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="listagem" title="Listagem"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="listarporid" title="Listar por ID"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="loginbasico" title="Login Basico"></FileContainer>
            <FileContainer folder="Antonio/especificasapi" linkhref="permirtirmobile" title="Permirtir Mobile"></FileContainer>
            </section>
        </div>
    )
}