import React from 'react';
import Me from './images/Me.jpg';
import '../style/Style.css';

export default function About() {
  return (
    <div>
        <div class="content-wrapper">
				<h2 data-aos="fade-right">About Me</h2>
				<div class="about-content" data-aos="fade-up">
					<img src={Me} alt="Umang Basuthkar" class="profile-img" />
					<div class="bio">
						<p>I'm Umang Basuthkar, an undergraduate student with a passion for capturing the extraordinary
							in the ordinary. My journey in photography began during my daily commutes in Hyderabad,
							India, where I discovered the breathtaking beauty of sunsets and cloud formations.</p>
							<br />
						<p>What started as a simple act of sharing these moments on Instagram has evolved into a
							dedicated pursuit of visual storytelling. Through my lens, I aim to showcase the
							often-overlooked wonders that surround us every day.</p>
					</div>
				</div>
			</div>
    </div>
  )
}
