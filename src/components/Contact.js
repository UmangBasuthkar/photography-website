import { useState } from 'react';
import React from 'react';
import '../style/Style.css';
import emailjs from 'emailjs-com';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	function handlechange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		emailjs.send("service_at3y9hd", "template_ssmey9r", formData, "GN2JoXhkveGAA2IK1")
			.then((response) => {
				alert("Message sent!");
			})
			.catch((error) => {
				alert("Error in sending message. Please try again!");
			});
	}

return (
	<div>
		<h2 style={{ marginLeft: '8%', marginTop: '10%' }} data-aos="fade-right">Get in Touch</h2>
		<div class="contact-content" data-aos="fade-up">
			<form id="contact-form" onSubmit = {handleSubmit}>
				<input type="text" name="name" onChange = {handlechange} placeholder="Your Name" required />
				<input type="email" name="email" onChange = {handlechange} placeholder="Your Email" required />
				<textarea name="message" onChange = {handlechange} placeholder="Your Message" required></textarea>
				<button type="submit">Send Message</button>
			</form>
			<div class="contact-info">
				<p><strong>Email:</strong> <a
					href="mailto:umangbasuthkar51@gmail.com">umangbasuthkar51@gmail.com</a></p>
				<p><strong>Instagram:</strong> <a href="https://instagram.com/umangbasuthkarphotography" data-aos="fade-up">@umangbasuthkarphotography</a></p>
			</div>
		</div>
	</div>
)
}
