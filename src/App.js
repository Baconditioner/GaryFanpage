import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import GlobalStyle from './globalStyles'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages';
import About from './pages/About';
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contact from './pages/Contact';
import GallerySlides from './components/GallerySlide';
import Gallery from './pages/Gallery';



function App() {

  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    Aos.init({});
  });

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/about' component={About} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />

    </>
  );
}

export default App;
