import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Faq from "./pages/FAQ";
import News from "./pages/Cannanews";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AgeGate from "./components/AgeGate";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <AgeGate>
      <BrowserRouter>

        {/* Navbar visible sur toutes les pages */}
        <Navbar cart={cart} setCart={setCart} />

        <Routes>
          {/* Accueil */}
          <Route path="/" element={<Home />} />

          {/* Boutique */}
          <Route
            path="/shop"
            element={
              <Shop
                cart={cart}
                setCart={setCart}
              />
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* FAQ */}
          <Route
            path="/faq"
            element={<Faq />}
          />

          {/* CannaNews */}
          <Route
            path="/cannanews"
            element={<CannaNews />}
          />
        </Routes>

        {/* Footer visible sur toutes les pages */}
        <Footer />

      </BrowserRouter>
    </AgeGate>
  );
}

export default App;
