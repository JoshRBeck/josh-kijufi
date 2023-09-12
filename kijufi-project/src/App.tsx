import { Route, Routes } from "react-router-dom"
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Information from "./pages/Information"
import Contact from "./pages/Contact"
import Faq from "./pages/Faq"
import Purchase from "./pages/Purchase"
import DataProtection from "./pages/DataProtection"
import Footer from "./components/Footer"

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/practical-info" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/dataprotection" element={<DataProtection />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
