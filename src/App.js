import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

import './App.css'

function App() {

  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/about" exact element={<About />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

