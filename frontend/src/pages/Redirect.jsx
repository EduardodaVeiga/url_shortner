import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import "react-loading-skeleton/dist/skeleton.css"
import { Link, redirect, useParams } from "react-router-dom"
import "../style/index.css"
import "animate.css/animate.min.css"

export default function Redirect() {
    const { id } = useParams()
    const [time, setTime] = useState(5)
    const [ip, setIp] = useState(5)

    const urlFetch = async () => await axios.get(`http://localhost:3009/api/url/${id}`)

    const getIp = () => {
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                setIp(data.ip)
            })
            .catch((error) => {
                console.error("Erro ao obter o IP:", error)
            })
    }

    const redirect = () => {
        let timeTemp = 5
        const timer = setInterval(() => {
            console.log("a")
            if (timeTemp == 0) return
            timeTemp -= 1
            setTime(timeTemp)
        }, 1000)

        // setTimeout(() => {
        //     clearInterval(timer)
        //     urlFetch().then((res) => {
        //         window.location.assign(res.data.url)
        //     })
        // }, 5000)
    }

    useEffect(() => {
        getIp()
        redirect()
    }, [])

    return (
        <div className="relative flex items-center justify-center w-screen h-screen bg-slate-50">
            <Link to="/" className="absolute top-5 left-10 text-blue-500 font-bold text-3xl sm:text-3xl">
                Url_Shortner
            </Link>

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
            <div className="w-[700px] flex flex-col h-fit gap-2 items-center">
                <h1 className={`${"animated__animated animate__slideInDown"} text-blue-500 font-bold text-5xl sm:text-3xl text-center`}>You gona be redirected in</h1>
                <h1 className={`text-blue-500  text-3xl sm:text-3xl rounded-full border-[5px] border-blue-500 w-[75px] h-[75px] flex items-center justify-center `}>{time}</h1>
            </div>
        </div>
    )
}
