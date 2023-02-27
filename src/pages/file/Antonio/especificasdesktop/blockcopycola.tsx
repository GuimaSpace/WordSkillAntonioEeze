import Image from 'next/image'
import Link from 'next/link'


export default function blockcopycola() {
    return (
        <div className="flex w-92 h-92 px-5 sm:px-52 pt-5 space-y-8">
            <div className="flex flex-col space-y-5 flex-wrap no-scrollbar">
                <span className="text-2xl font-bold">Bloquear Copy e Cola:</span>
                <span>
                para bloquear o copiar e colar de uma textBox, idependentemente de ser com ctrl command ou mouse, é só você ir nas propriedades da textBox ShortcutsEnabled e selecionar False

                </span>
            </div>
        </div>
    )
}