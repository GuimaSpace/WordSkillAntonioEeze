import Link from "next/link"

export default function FolderContainer({pasta,title,linkhref}: any) {
    return (
        <Link href={`/${pasta}/folders/${linkhref}`} className="flex overflow-hidden transition hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-1 hover:scale-105 p-2 w-56 h-52 border rounded-md border-zinc-800">
            <div className="flex flex-col p-3">
                <span className="text-lg my-1 font-bold">{`${title}`}</span>
                <span>Aqui estão todos os arquivos relacionados a {`${title}`}</span>
            </div>
        </Link>
    )
}