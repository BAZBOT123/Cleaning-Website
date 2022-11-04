import '../App.css';
import './about.css';
import { Link } from "react-router-dom";
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';


export default function About() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo-svg">
          <FontAwesomeIcon icon={faBroom}></FontAwesomeIcon>
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
        <h3>So you want to know more about our cleaning?</h3>

        <p> You’re in the right place. Here, you’ll find everything you need to know about Lily's Cleaners. Because it’s what we do best.</p>

        <br />

        <h1>Lily's Cleaners story</h1>
        <p>Our story began in 2004 in <a href="https://en.wikipedia.org/wiki/Newcastle_upon_Tyne"
        >Newcastle Upon Tyne</a>, where we looked around and realised that there wasn't much domestic cleaning services around various areas being advertised, so this is where Lily's Cleaners stepped in.
          Through the years, we have relocated into London where we offer services to high valued clientele that we have gained great ongoing relations with.
        </p>

        <h1>Our Mission</h1>
        <p>We have an ethos to provide sustainable, fulfilling careers for our cleaners.
          In an industry where plenty of unfair and dubious business practices (such as unpaid overtime & travel time and below minimum-wage compensation) are the norms, Lily's Cleaners instead operates on responsible business practices.
          This means we employ our cleaners, affording them the rights and benefits that come with that, including paid travel time, paid overtime, a healthy working environment and so forth...
        </p>

        <p>
          Ultimately, we believe that our dual emphasis on customer experience and cleaner development is the reason why we have been able to deliver on hundreds of thousands of cleans and will always be the reason why we continue to clean, one home at a time.
        </p>

      </main>

      <footer className="App-footer">
        <h1>We make homes clean, safe, healthy.</h1>
        <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
      </footer>
    </div>
  );
}