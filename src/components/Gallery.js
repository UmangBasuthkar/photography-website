import React from 'react';
import '../style/Style.css';
import Img1 from './images/1.jpg';
import Img2 from './images/2.jpg';
import Img3 from './images/3.jpg';
import Img4 from './images/4.jpg';
import Img5 from './images/5.jpg';
import Img6 from './images/6.jpg';
import Img7 from './images/7.jpg';
import Img8 from './images/8.jpg';
import Img9 from './images/9.jpg';
import Img11 from './images/11.jpg';
import Img12 from './images/12.jpg';
import Img13 from './images/13.jpg';
import Img14 from './images/14.jpg';
import Img15 from './images/15.jpg';

export default function Gallery() {
  return (
    <div>
        <h2 style={{marginLeft: '8%', marginTop: '10%'}} data-aos="fade-right">Gallery</h2>
			<div class="gallery-grid" data-aos="fade-right">
				<img src={Img1} alt="Gallery 1"/>
				<img src={Img2} alt="Gallery 2"/>
				<img src={Img3} alt="Gallery 4"/>
				<img src={Img4} alt="Gallery 3"/>
				<img src={Img6} alt="Gallery 6"/>
				<img src={Img7} alt="Gallery 7"/>
				<img src={Img8} alt="Gallery 8"/>
				<img src={Img9} alt="Gallery 9"/>
				<img src={Img12} alt="Gallery 12"/>
				<img src={Img11} alt="Gallery 11"/>
				<img src={Img13} alt="Gallery 13"/>
				<img src={Img14} alt="Gallery 14"/>
				<img src={Img15} alt="Gallery 15"/>
				<img src={Img5} alt="Gallery 5"/>
			</div>
			<a href="https://instagram.com/umangbasuthkarphotography" class="cta-button" data-aos="fade-up">Explore More
				on Instagram</a>
    </div>
  )
}
