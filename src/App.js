import React from "react";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Product from "./components/Product/Product";
import Support from "./components/Support/Support";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Product />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
