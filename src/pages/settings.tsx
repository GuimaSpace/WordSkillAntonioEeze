import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function settings() {
    return (
        <div className="flex justify-center w-screen h-96 ">
            <div className="flex items-center w-96 h-32 my-auto bg-zinc-800 rounded-md p-4 space-x-2">
                <AiOutlineLoading3Quarters className="animate-spin text-xl font-bold"/>
                <span className="text-lg font-bold animate-pulse">Work in progress</span>
            </div>
        </div>
    )
}