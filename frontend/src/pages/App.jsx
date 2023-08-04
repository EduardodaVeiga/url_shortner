import { useState } from "react"
import axios from "axios"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import "animate.css/animate.min.css"

export default function App() {
  const [value, setValue] = useState("")
  const [error, setError] = useState("")
  const [copyModal, setCopyModal] = useState()
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState()

  const handleInputValue = (value) => setValue(value)

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(response)
      setCopyModal(
        <div
          className={`${"animated__animated animate__bounceIn"}
            } absolute  z-10 rounded-md drop-shadow-[0px_0px_10px_rgb(0,0,0,0.2)] bg-slate-50 top-[100px]`}
        >
          <div className="flex items-center justify-center px-10 py-5">
            <h1 className="text-blue-500 text-xl font-medium">Link copied to clipboard!</h1>
          </div>
        </div>
      )
      setTimeout(() => {
        setCopyModal(
          <div
            className={`${"animated__animated  animate__bounceOut"} absolute  z-10 rounded-md drop-shadow-[0px_0px_10px_rgb(0,0,0,0.2)] bg-slate-50 top-[100px]`}
          >
            <div className="flex items-center justify-center px-10 py-5">
              <h1 className="text-blue-500 text-xl font-medium">Link copied to clipboard!</h1>
            </div>
          </div>
        )
      }, 1000)
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async () => {
    setLoading(true)
    if (value.length < 4) {
      setError("Enter a valid link!")
      setLoading()
    } else {
      axios
        .post("http://localhost:3009/api/url/shorten", {
          url: value,
        })
        .then((res) => {
          setLoading(false)
          setResponse(res.data.newURL)
          setError("")
        })
      //   setLoading(false)
      //   setResponse({ newURL: "UMA URL MUITO FODA" })
      //   setError("")
    }
  }

  return (
    <div className=" flex items-center justify-center w-screen h-screen bg-slate-50 relative">
      {copyModal}
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
        <div className="relative w-2/3 flex h-fit flex-col items-center gap-4">
          <div className="relative w-full flex">
            <input
              value={value}
              onChange={(e) => handleInputValue(e.target.value)}
              className="focus:outline mb-2 focus:outline-blue-500 w-full outline-[2px] bg-gray-200 px-4 h-[50px] rounded-md "
              placeholder="http://YoutubeVideo"
              type="text"
            />
            <span className="text-red-500 text-start w-full text-sm absolute bottom-[-15px]">{error}</span>
          </div>
          <button
            onClick={handleClick}
            className="w-full rounded-md h-[50px] font-medium text-xl transition-all duration-150 hover:bg-blue-500 focus:bg-blue-500 bg-blue-600 hover:drop-shadow-[0_0_5px_rgba(37,99,235)] focus:drop-shadow-[0_0_5px_rgba(59,130,236)]  text-white"
          >
            Create URL
          </button>
          {loading ? (
            <div className="w-full bottom-[-40px]">
              <Skeleton variant="text" width="100%" height={30} />
            </div>
          ) : (
            <div className="w-full items-center relative flex gap-2 ">
              <a className={`bottom-[-100px] w-full break-words text-center text-blue-500 text-sm `} href="/">
                {response}
              </a>
              <svg
                onClick={copyLink}
                className={`${!response && "hidden"} flex cursor-pointer absolute top-0 right-[-40px] bg-slate-400 rounded-md p-1 fill-white w-10`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M6.9998 6V3C6.9998 2.44772 7.44752 2 7.9998 2H19.9998C20.5521 2 20.9998 2.44772 20.9998 3V17C20.9998 17.5523 20.5521 18 19.9998 18H16.9998V20.9991C16.9998 21.5519 16.5499 22 15.993 22H4.00666C3.45059 22 3 21.5554 3 20.9991L3.0026 7.00087C3.0027 6.44811 3.45264 6 4.00942 6H6.9998ZM5.00242 8L5.00019 20H14.9998V8H5.00242ZM8.9998 6H16.9998V16H18.9998V4H8.9998V6Z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
