import Link from 'next/link'
import { IoMdSettings } from 'react-icons/io'

export default function NavBar() {
    return (
        <header className="flex justify-around align-middle items-center w-full h-14 border-b border-zinc-800 space-x-1">
            <div className='flex flex-row items-center active:text-gray-500 transition'>
                <Link href="/"><img src="/images/obsidian.svg" className='w-10 h-10' /></Link>
                <Link href="/">Início</Link>
            </div>
            <div>
                <Link href="/settings"><IoMdSettings size={27} className="active:text-gray-500 transition"/></Link>
            </div>
        </header>
    )
}