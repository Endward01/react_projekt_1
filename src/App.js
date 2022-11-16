import "./App.css";
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Offer from "./components/Offer";

function App() {
  useEffect(() => {
    document.title = "Landing Page";
  }, []);

  return (
    <>
      <NavBar />
      <About />
      <Contact />
      <Offer />
      <Footer />
    </>
  );
}

export default App;
