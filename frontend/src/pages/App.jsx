import { useState } from "react"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
export default function App() {
    const [value, setValue] = useState("")
    const [response, setResponse] = useState("")
    const [loading, setLoading] = useState()

    const handleInputValue = (value) => setValue(value)

    const handleClick = () => {
        setLoading(true)
        setTimeout(() => {
            axios.get("https://viacep.com.br/ws/84640000/json/").then((res) => {
                setLoading(false)
                setResponse(res.data)
            })
        }, 1000)
    }

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-slate-50 relative">
            <div className="flex gap-2 justify-between items-center fixed rounded-full animate-spin-slow  sm:bottom-[-100px] sm:left-[-100px] bottom-[-200px] left-[-200px]">
                <div className="sm:w-[25px]  sm:h-[25px] w-[50px] rounded-full h-[50px] bg-blue-500" />
                <div className="sm:w-[200px] sm:h-[200px] w-[400px] h-[400px] rounded-full bg-blue-500" />
                <div className="sm:w-[25px]  sm:h-[25px] w-[50px] rounded-full h-[50px] bg-blue-500" />
            </div>
            <div className="flex gap-2 justify-between items-center fixed rounded-full animate-spin-slow sm:top-[-100px] sm:right-[-100px] top-[-200px] right-[-200px]">
                <div className="sm:w-[25px]  sm:h-[25px] w-[50px] rounded-full h-[50px] bg-blue-500" />
                <div className="sm:w-[200px] sm:h-[200px] w-[400px] h-[400px] rounded-full bg-blue-500" />
                <div className="sm:w-[25px]  sm:h-[25px] w-[50px] rounded-full h-[50px] bg-blue-500" />
            </div>
            <div className="w-[700px] flex flex-col h-fit gap-5 items-center">
                <h1 className="text-blue-500 font-bold text-5xl sm:text-3xl">Url_Shortner</h1>
                <div className="relative w-2/3 flex flex-col items-center gap-4">
                    <input
                        value={value}
                        onChange={(e) => handleInputValue(e.target.value)}
                        className="focus:outline focus:outline-blue-500 w-full outline-[2px] bg-gray-200 px-4 h-[50px] rounded-md "
                        placeholder="http://YoutubeVideo"
                        type="text"
                    />
                    <button
                        onClick={handleClick}
                        className="w-full rounded-md h-[50px] font-medium text-xl transition-all duration-150 hover:bg-blue-500 focus:bg-blue-500 bg-blue-600 hover:drop-shadow-[0_0_5px_rgba(37,99,235)] focus:drop-shadow-[0_0_5px_rgba(59,130,236)]  text-white"
                    >
                        Gerar URL
                    </button>
                    {loading ? (
                        <div className="absolute w-full bottom-[-40px]">
                            <Skeleton variant="text" width="100%" height={30} />
                        </div>
                    ) : (
                        <a className={`absolute bottom-[-40px] w-full break-words text-center text-blue-500 text-xl `} href="/">
                            {response.cep}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
