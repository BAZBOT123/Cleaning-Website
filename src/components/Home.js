import '../App.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];




export default function Home() {
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

      <main className="App-header">

      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div>
      <Link to='/about'>
      <button type="button" className="btn btn-info">Enter</button>
      </Link>
      </div>

      <div>

      <p>pppp</p>
      </div>



      </main>


      <footer className="App-footer">
        <h1>We make homes clean, safe, healthy.</h1>
        <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
      </footer>
    </div>
  );
}
