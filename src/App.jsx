
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header.jsx';
import { Landing } from "./pages/Landing/Landing.jsx";
import { About } from "./pages/About/About.jsx";
import { Series } from "./pages/Series/Series.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { NotFound } from './pages/NotFound/NotFound.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<About />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
