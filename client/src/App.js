import {Routes, Route} from "react-router-dom";
import Navbar from "./components/main/navbar/navbar";
import Home from "./components/main/home/home.jsx"
import './App.css';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
