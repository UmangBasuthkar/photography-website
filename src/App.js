import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
