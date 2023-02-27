import FileContainer from '../components/FileContainer'
import FolderContainer from '../components/FolderComponent'


export default function Ezekiel() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 flex-wrap no-scrollbar no-scrollbar::-webkit-scrollbar">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Todos os arquivos de Ezekiel:</span>
            <section className="flex justify-center mx-auto gap-5 flex-wrap">
                <FileContainer folder="Ezekiel" linkhref="athenagluev3" title="Athena Glue V3"></FileContainer>
            </section>
        </div>
    )
}