import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import SolarSystems from './pages/SolarSystems';
import Subsidy from './pages/Subsidy';
import Calculator from './pages/Calculator';
import Installation from './pages/Installation';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solar-systems" element={<SolarSystems />} />
        <Route path="/subsidy" element={<Subsidy />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <PopupForm />
    </Router>
  );
}

export default App;
