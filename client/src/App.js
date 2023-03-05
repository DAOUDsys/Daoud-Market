import {Routes, Route} from "react-router-dom";
import Navbar from "./components/main/navbar/navbar";
import Home from "./components/main/home/home.jsx"
import Product from "./components/main/product/product";
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product/:id" element={<Product/>} />
    </Routes>
    </>
  );
}

export default App;
