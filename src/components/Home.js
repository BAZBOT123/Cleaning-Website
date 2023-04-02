import './home.css';
import SlideShow from './slide.js'
import { Link } from "react-router-dom"

// import React, { useState } from 'react';
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import Logo from '../assets/lilys.jpg'

// import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AnimatedPage from './AnimatedPage'

// import Slider from './Slider/Slider.js'






export default function Home() {





  return (
    <AnimatedPage>
      <div className="App">
        <nav className="navbar">
          <div className="logo-lily">
            <img src={Logo} alt="Girl in a jacket" height="45"></img>
          </div>
          <div className="Home-page">
            <h1 className='home-font'><Link to='/home'>Home</Link></h1>
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

        <main className="App-header">



         <div className="slide-container">
          <SlideShow>

           
          </SlideShow>
        </div>


        </main>


        <footer className="App-footer">
          <h1>We make homes clean, safe, healthy.</h1>
          <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
        </footer>
      </div>
    </AnimatedPage>
  );
}
