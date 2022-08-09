import '../App.css';
import { Link } from "react-router-dom"



export default function About() {
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
        <h3>So you want to know more about our cleaning?</h3>

        <p> You’re in the right place. Here, you’ll find everything you need to know about Lily's cleaning. Because it’s what we do best.</p>


        <h1>Our story</h1>
        <p>Born in South Africa with a blend of Portuguese and British culture. It all started in Mozambique, home of the hot sun, rich soil...
          and African Bird’s Eye Chillies. Also known as PERi-PERi. Small but mighty, these chillies have been used for centuries in local Mozambiquan cooking.
          The Portuguese then added a squeeze of lemon and kick of garlic to make the first PERi-PERi sauce.
          Used on just about anything, they found it was the ultimate baste for flame-grilling spatchcocked chicken.
          And it wasn’t long before two friends in Johannesburg came to experience the taste of PERi-PERi chicken and Nando’s was born.
        </p>

        <p>Fast forward a few years, restaurants and Fino Pittas and today, the Nando’s PERi-PERi you know and love still pays homage to those roots. </p>

        <h4>Reach out to us</h4>
      </main>

      <footer className="App-footer">
      <h1>We make homes clean, safe, healthy.</h1>
      </footer>
    </div>
  );
}