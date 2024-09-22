import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import './App.css'// later if I want I can add css here for global styles
import 'animate.css';
import signatureImg from './signature2.png';

function App() {
  return (
    <div className="App">
      <img src ={signatureImg} alt = 'Signature' className="Signature" />

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
