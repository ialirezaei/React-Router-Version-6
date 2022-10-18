import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

function App() {
  const cart = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          {/* <Link to="/joke">joke</Link> */}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/joke" element={<Navigate to="/products" />} />
          <Route path="/checkout" element={cart ? <Home /> : <Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App