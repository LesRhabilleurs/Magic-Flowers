import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Navbar from "./components/Navbar"

import "./App.css"

function App() {
  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>
      <Navbar cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop cart={cart} setCart={setCart} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App App
