
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Landing } from "./pages/Landing/Landing.jsx";
import { About } from "./pages/About/About.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Footer } from "./components/Footer/Footer.jsx";
import { Portraits } from "./pages/Portraits/Portraits.jsx";
import { Nature } from "./pages/Nature/Nature.jsx";
import { Concerts } from "./pages/Concerts/Concerts.jsx";
import { Edibles } from "./pages/Edibles/Edibles.jsx";
import { Architecture } from "./pages/Architecture/Architecture.jsx";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/edibles" element={<Edibles />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
