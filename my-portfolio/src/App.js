import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index Component={Home}/>
        <Route path="about" Component={About} />
        <Route path="portfolio" Component={Portfolio} />
        <Route path="contact" Component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
