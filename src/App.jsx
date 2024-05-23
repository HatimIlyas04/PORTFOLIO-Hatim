import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './2-HERO/Hero';
import Header from './1-HEADER/Header';
import Main from './3-MAIN/Main';
import Footer from './5-FOOTER/Footer';
import Contact from './4-CONTACT/Contact';
import About from './ABOUT/About';

const App = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => { 
      if (window.scrollY > 300) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='up' className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
        
        <Routes>
          <Route path="/About" element={<About />} />
        </Routes>
        
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Main />} />
        </Routes>
        <Footer />
      </Router>


      <a href="#up">
        <button className='scroll2up' style={{ opacity: showScrollUp ? 1 : 0 }}>
          <img
            width="44"
            height="44"
            src="https://img.icons8.com/ios-filled/50/7950F2/circled-chevron-up.png"
            alt="circled-chevron-up"
          />
        </button>
      </a>
    </div>
  );
};

export default App;
