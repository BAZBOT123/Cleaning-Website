import './home.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import Logo from '../assets/lilys.jpg'
// eslint-disable-next-line no-unused-vars
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import AnimatedPage from './AnimatedPage'


const slideImages = [
  {
    url: 'https://media.istockphoto.com/photos/professional-housecleaner-at-work-picture-id1369817796?k=20&m=1369817796&s=612x612&w=0&h=iW4quYu-2ie8zdUGlSXPf24O4-5pNVypttCPuBKmOtQ=',
    caption: 'Slide 1'
  },
  {
    url: '.../assets/hoovering.jpeg',
    caption: 'Slide 2'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3'
  },
];


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
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div className="each-slide" key={index}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
                    <span>{slideImage.caption}</span>
                  </div>
                </div>
              ))}
            </Slide>
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
    </AnimatedPage>
  );
}
