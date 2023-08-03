import React from "react"
import ReactDOM from "react-dom/client"
import "./style/index.css"
import App from "./pages/App"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Redirect from "./pages/Redirect"

const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
    },
    {
        element: <Redirect />,
        path: "/redirect",
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)
