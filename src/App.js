import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home/Home"));
const Services = lazy(() => import("./pages/Services/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Cart = lazy(() => import("./pages/Cart/Cart"));

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <Suspense
        fallback={
          <main className="main-content loading">
            <p style={{ textAlign: "center", marginTop: "60px" }}>
              Loading...
            </p>
          </main>
        }
      >
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          {/* Footer renders ONLY after page is loaded */}
          <Footer />
        </main>
      </Suspense>
    </div>
  );
}

export default App;
