import '../App.css';
import './Services.css';
import { Link } from "react-router-dom"
import Logo from '../assets/lilys.jpg'
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';

export default function Services() {
    return (
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
                <h1>Our Services</h1>
                <p>We understand that house cleaning is a very personal thing.
                    That is why our team will do their best not to disappoint you,
                    handling everything according to your specifications and requests.
                    So many people so many tastes, this is why we customize our services to you and to your budget.

                </p>
                <div>
                    <h2>Commercial cleaning</h2>
                    <div class="container three-column-grid">
                        <div class="box"></div>
                        <div class="box">Lily's Cleaners makes it easier than ever to maintain a clean, organized, and productive office space.</div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                    </div>
                </div>
            </main>

            <footer className="App-footer">
                <h1>We make homes clean, safe, healthy.</h1>
                <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
            </footer>
        </div>
    );
}