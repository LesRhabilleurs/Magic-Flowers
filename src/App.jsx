import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Faq from "./pages/FAQ";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      {/* Navbar visible sur toutes les pages */}
      <Navbar cart={cart} setCart={setCart} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={<Shop cart={cart} setCart={setCart} />}
        />

        {/* Route FAQ ajoutée */}
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
