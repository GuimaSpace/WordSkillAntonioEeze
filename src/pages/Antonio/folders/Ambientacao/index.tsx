import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function Ambientacao() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta ambientalçao de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio" linkhref="materialinstalacao" title="Material de Instalação e configuração"></FileContainer>
            </section>
        </div>
    )
}