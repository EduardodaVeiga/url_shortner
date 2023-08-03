import { useState } from "react"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Link } from "react-router-dom"

export default function Redirect() {
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
                <h1 className="text-blue-500 font-bold text-5xl sm:text-3xl">Redirecting to...</h1>
                <h1 className="text-blue-500  text-3xl sm:text-3xl">http://localhost:3000</h1>
            </div>
        </div>
    )
}
