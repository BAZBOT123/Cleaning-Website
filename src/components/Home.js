import './home.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import Logo from '../assets/lilys.jpg'
// eslint-disable-next-line no-unused-vars
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AnimatedPage from './AnimatedPage'

import Slider from './components/Slider/Slider.js'

  //     const slideImages = [
  //   {
  //     url: '../assets/img1.jpeg',
  //     caption: 'Slide 1'
  //   },
  //   {
  //     url: '../assets/img2.jpeg',
  //     caption: 'Slide 2'
  //   },
  //   {
  //     url: '../assets/img3.jpeg',
  //     caption: 'Slide 3'
  //   },
  // ];

 





export default function Home() {


    const images = [
      '../assets/img1..jpg',
      '../assets/img2..jpg',
      '../assets/img3..jpg',
    ]


  

  
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
            <Slide>
              {/* {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            */}

            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${images[2]})`}}>
                <span>Slide 3</span>
              </div>
            </div>
            </Slide>
          </div>


          <>
      <Slider />
    </>


        </main>


        <footer className="App-footer">
          <h1>We make homes clean, safe, healthy.</h1>
          <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
        </footer>
      </div>
    </AnimatedPage>
  );
}
