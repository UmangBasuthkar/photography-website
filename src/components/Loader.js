import React, { useEffect } from 'react';
import '../style/Style.css';

export default function Loader() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const loader = document.querySelector('.loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className="loader">
        <div className="loader-content">
          <h1>UB</h1>
          <p>Capturing Moments in Time</p>
        </div>
      </div>
    </div>
  )
}
