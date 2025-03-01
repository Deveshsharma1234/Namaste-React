import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Dogy from "./components/Dogy"










const App = () => {
  // fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  // .then(res => res.json())
  // .then(data => console.log(data))///Not ALLOWED CORS error
  return(
    <div className = "App">
      <Header />
      <Body />
      <Dogy />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)