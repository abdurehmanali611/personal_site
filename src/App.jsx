import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import AboutMe from './Pages/AboutMe'
import PortFolio from './Pages/PortFolio'
import Contacts from './Pages/Contacts'
import Navbar from "./common/Navbar"
import Footer from "./common/Footer"
import Services from "./Pages/Services"

const App = () => {
  return (
   <div>
    <Navbar />
     <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<AboutMe/>}/>
      <Route path="/portfolio" element = {<PortFolio/>}/>
      <Route path="/contact" element = {<Contacts/>}/>
      <Route path = "/service" element = {<Services/>}/>
    </Routes>
    <Footer />
   </div>
  )
}

export default App