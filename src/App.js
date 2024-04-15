import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS CSS
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import FooterSection from "./pages/Footer"; // Import the FooterSection component
import Home from "./pages/Home";
import Nav from "./pages/Nav"; // Import the Nav component
import Portifolia from "./pages/Portifolia";

AOS.init(); // Initialize AOS globally
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="portifolio" element={<Portifolia />} />
      </Routes>
      <FooterSection />
    </div>
  );
}

export default App;
