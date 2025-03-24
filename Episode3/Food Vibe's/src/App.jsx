import React  ,{lazy,Suspense, useEffect, useState}from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Body from './pages/Body'
import Dogy from "./components/Dogy"
// import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error'
import RestrauntsMenu from './pages/RestrauntsMenu'
import Shimmer from './components/Shimmer'
import userContext from './utils/userContext'
import { Provider } from 'react-redux'
import appStore from './utils/redux/appStore'
import CartItems from './components/cartItems'


const Grocery = lazy(()=>import("./components/Grocery"))
const About = lazy(()=> import("./pages/About"))





const App = () => {
  const[userInfo,setUserInfo] = useState("");
  useEffect(()=>{
    //implemet login logic or authorixation logic
    const data = {
      name : "Devesh Sharma",
    }
    setUserInfo(data.name);
  },[])

  return(

<Provider  store={appStore}> {/*Here provider from react redux takes store as a prop to link of app store to the application */}
    <userContext.Provider value={{loggedInUser : userInfo , setUserInfo}}>


   
    <div className = "App">
      <Header />
      <Outlet/>{/*Outlet willl be replased as per path   */}
   
    </div>
    </userContext.Provider>
    </Provider>
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
        element:<Suspense fallback ={
          <>
          Hi Wait for Getting data it is lazyily loaded
          </>
        }>
          <About/>
        
        </Suspense>
      },
      {
        path: "/contact-us",
        element: <Contact/>
      },
      {
        path:"/restraunts/:resId",
        element:<RestrauntsMenu/>
      },
      {
        path:"/grocery",
        element :<Suspense fallback ={
        
          <>
          {[...Array(10)].map((_, index) => (
            <Shimmer key={index} />
          ))}
        </>
        }> <Grocery/></Suspense>

      },
      {
        path: "/cart",
        element : <CartItems/>
      }

    ],
    errorElement:  <Error/>
    
  },
  
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router = {appRouter}/>)