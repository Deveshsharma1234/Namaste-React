import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'


const Header =()=>{
  return(
    <div className = "Header">
      <div className="logoContainer">
        <img className='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" alt="logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About-us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>


    </div>
  )
}

const Body =()=>{
  return(
    <div className = "Body">
      <div className="banner">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" alt="banner" />
      </div>

      <div className="products">
        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" alt="product" />
          <h3>Product 1</h3>
          <p>Price: $10</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" alt="product" />
          <h3>Product 2</h3>
          <p>Price: $20</p>
          <button>Add to Cart</button>
        </div>

        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrEoGN30ycyxwFM_KY3t_zSrkfMaQ_3e7ow&s" alt="product" />
          <h3>Product 3</h3>
          <p>Price: $30</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
const App = () => {
  return(
    <div className = "App">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)