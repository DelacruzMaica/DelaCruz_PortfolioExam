import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import './App.css'

function Home() {
  return (
    <>
    <Navbar/>
    <section id="About">
      <About />
    </section>

    <section id="Projects">
      <Projects />
    </section>

    <section id="Contact">
      <Contact />
    </section>

    <Footer />
       
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        
      </Routes>
    </HashRouter>
  );
}


export default App;