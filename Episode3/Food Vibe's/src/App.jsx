import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Dogy from "./components/Dogy"
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error'
import RestrauntsMenu from './pages/RestrauntsMenu'








const App = () => {
  // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  // .then(res => res.json())
  // .then(data => console.log(data))///Not ALLOWED CORS error
  return(
    <div className = "App">
      <Header />
      <Outlet/>{/*Outlet willl be replased as per path   */}
   
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about-us",
        element:<About/>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      },
      {
        path:"/restraunts/:id",
        element:<RestrauntsMenu/>
      }

    ],
    errorElement:  <Error/>
    
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router = {appRouter}/>)