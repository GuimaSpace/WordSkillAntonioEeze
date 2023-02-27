import Link from 'next/link'

export default function Container({ name }: any) {
  const cardTitle = name

  return (
    <Link href={`/${name}`} className="flex overflow-hidden transition hover:bg-zinc-800 hover:shadow-lg hover:-translate-y-1 hover:scale-110 p-2 w-96 h-30 border rounded-md border-zinc-800">
      <div className="flex p-3 space-x-3">
        <img src={`/images/${name}.jpg`} className="w-12 h-12 rounded-full"></img>
        <span className="text-2xl my-1 font-bold">{cardTitle}</span>
      </div>
    </Link>
  )
}