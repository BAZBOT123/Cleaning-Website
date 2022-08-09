import './Contact.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bbagh2c', 'template_7axl7ze', form.current, '4xogIVTSnDeEZmRRM')
      .then((result) => {
          console.log(result.text);
          alert('Message sent!')
      }, (error) => {
          console.log(error.text);
      });
  };






    return (
        <div className="App">

            <nav className="navbar">
                <div className="Logo">
                    <h1>Logo</h1>
                </div>
                <div className="Home-page">
                    <h1 className='home-font'><Link to='/'>Home</Link></h1>

                </div>
                <div className="Reviews-page">
                    <h1 className='reviews-font'><Link to='/reviews'>Reviews</Link></h1>
                </div>
                <div className="Services-page">
                    <h1 className='services-font'><Link to='/services'>Services</Link></h1>
                </div>
                <div className="About-page">
                    <h1 className='cbout-font'><Link to='/about'>About</Link></h1>
                </div>
                <div className="Contact-page">
                    <h1 className='contact-font'><Link to='/contact'>Contact</Link></h1>
                </div>
            </nav>

            <main className="Contacts-main">
                <div className="contact-left-contents">

                <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>

                </div>


                <div className="contact-right-contents">
                    <h3>Contact details:</h3>
                    <p>Tel: +44 7964 199 000</p>
                    <p>Email: LilysCleanersUK@gmail.com</p>
                    <p>Location: We are London based</p>
                </div>
            </main>


            <footer className="App-footer">
                <h1>We make homes clean, safe, healthy.</h1>
                <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
            </footer>
        </div>
    );
}
