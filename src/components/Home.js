import '../App.css';
import { Link } from "react-router-dom"



function Home() {
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
          <h1>Services</h1>
        </div>
        <div className="About-us-page">
          <h1>About Us</h1>
        </div>
        <div className="Contact-us-page">
          <h1>Contact Us</h1>
        </div>
      </nav>

      <main className="App-header">
        <h1>Hello Fish Girl!</h1>
      </main>


      <footer className="App-footer">
        <h1>Contact number: 999</h1>
      </footer>
    </div>
  );
}

export default Home;