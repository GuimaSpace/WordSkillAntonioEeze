import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function especificasmobile() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta Especificas Mobile de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio/especificasmobile" linkhref="consumeapi" title="Como consumir a API"></FileContainer>
            <FileContainer folder="Antonio/especificasmobile" linkhref="listview" title="Criar listview"></FileContainer>
            <FileContainer folder="Antonio/especificasmobile" linkhref="popup" title="Detail popup"></FileContainer>
            <FileContainer folder="Antonio/especificasmobile" linkhref="Flyout" title="Flyout"></FileContainer>
            <FileContainer folder="Antonio/especificasmobile" linkhref="popup" title="popup"></FileContainer>

            </section>
        </div>
    )
}