import Link from 'next/link'
import FileContainer from '../../../components/FileContainer'

export default function especificasdesktop() {
    return (
        <div className="flex flex-col w-screen p-10 space-y-12 overflow-y-scroll flex-wrap no-scrollbar ">
            <span className="text-2xl text-white mt-3 font-bold mx-auto">Pasta Especificas Desktop de Antônio:</span>
            <section className="flex justify-center gap-5 flex-wrap">
            <FileContainer folder="Antonio/especificasdesktop" linkhref="frasesaleatoriasjson" title="Apresentar frase aleatorias de um arquivo json"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="blockcopycola" title="Bloquear Copiar Colar"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="alertcaps" title="Como avisar caso o capslock esteja ligador"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="criarapelidomisturar" title="Criar apelido, misturar txt com data"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="criaruserlogs" title="Criar pasta USER_LOGS sempre que errarem a autenticação"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="closeformusercontrol" title="Fechar Form pelo UserControl"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="filedialog" title="FileDialog com filtro imagem"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="musicplayer" title="Player de musica"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="saudacao" title="Saudações de acordo com o horario"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="cadimage" title="Selecionar imagem e Cadastrada"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="changecolor" title="Trocar Cores"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="useparent" title="Usar Parent para mudar a tela"></FileContainer>
            <FileContainer folder="Antonio/especificasdesktop" linkhref="verifyphoto" title="Verificação por foto"></FileContainer>

            

            </section>
        </div>
    )
}