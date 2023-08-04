import Navbar from "./Navbar"
import Home from "./pages/Home"
import CSV from "./pages/CSS"
import Duplicates from "./pages/Duplicates"
import MAP from "./pages/MAPS"
import Plots from "./pages/Plots"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/csv" element={<CSV />} />
          <Route path="/duplicates" element={<Duplicates />} />
          <Route path="/map" element={<MAP />} />
          <Route path="/plots" element={<Plots />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App