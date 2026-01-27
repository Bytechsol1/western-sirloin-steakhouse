
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import ReviewSection from './components/ReviewSection';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu" className="bg-stone-100">
          <MenuSection />
        </section>
        <section id="reviews">
          <ReviewSection />
        </section>
        <section id="location" className="bg-stone-50">
          <ContactInfo />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
