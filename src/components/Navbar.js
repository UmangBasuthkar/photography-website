import React, { useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import Header from './Header';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import '../style/Style.css';

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header>
        <nav>
          <Link to="home" smooth={true} duration={500} className="logo pointer">UBP</Link>
          <ul>
            <li><Link to="about" smooth={true} duration={500} className='pointer'>About</Link></li>
            <li><Link to="gallery" smooth={true} duration={500} className='pointer'>Gallery</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className='pointer'>Contact</Link></li>
          </ul>
          <a 
            href="https://instagram.com/umangbasuthkarphotography" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-icon"
            aria-label="Instagram"
          >
          </a>
        </nav>
      </header>

      {/* Sections */}
      <Element name="home">
        <Header />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}
