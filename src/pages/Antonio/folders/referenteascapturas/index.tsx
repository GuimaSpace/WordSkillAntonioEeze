import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function referenteascapturas() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta Referente as captureas de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio/refenteascapturas" linkhref="alinhamentoeteste" title="Alinhamentos e Teste Unitario"></FileContainer>
            <FileContainer folder="Antonio/refenteascapturas" linkhref="consumoapixamarin.md" title="Consumo API com Xamarin Forms"></FileContainer>
            <FileContainer folder="Antonio/refenteascapturas" linkhref="primeirareuniao" title="Primeira Reunião Explicativa"></FileContainer>

            </section>
        </div>
    )
}