import React from "react"
import App from "./App"
import Home from "./pages/Home"
import { createBrowserRouter } from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRouter from "./protectedRoutes/ProtectedRouter"
import Error from "./pages/Error"
export  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement : <Error/>,
      children:[
        {
          path: "/",
          element :  <ProtectedRouter element={<Home/>}/>
        },
        {
          path:"/login",
          element: <Login/>
        },
        {
          path: "/profile",
          element: <ProtectedRouter element={<h1>Profile</h1>}/>
        }
      ]
    }
  
  
  ])