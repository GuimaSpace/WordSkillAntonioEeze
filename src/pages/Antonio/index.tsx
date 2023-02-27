import FileContainer from '../components/FileContainer'
import FolderContainer from '../components/FolderComponent'

export default function Antonio() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Todos os arquivos de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
                <FolderContainer pasta="Antonio" linkhref="Ambientacao" title="Ambientacao"/>
                <FolderContainer pasta="Antonio" linkhref="especificasapi" title="Especificas API"/>
                <FolderContainer pasta="Antonio" linkhref="especificasdesktop" title="Especificas Desktop"/>
                <FolderContainer pasta="Antonio" linkhref="especificasmobile" title="Especificas Mobile"/>
                <FolderContainer pasta="Antonio" linkhref="especificasweb" title="Especificas WEB"/>
                <FolderContainer pasta="Antonio" linkhref="referenteascapturas" title="Referentes Captura"/>
            </section>
        </div>
    )
}