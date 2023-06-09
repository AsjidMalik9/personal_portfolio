import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useRef } from 'react';

function App() {

  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Banner scrollToContactForm={scrollToContactForm} />
      <Skills />
      <Projects />
      <Contact contactFormRef={contactFormRef} />
      <Footer />
    </div>
  );
}

export default App;
