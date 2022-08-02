import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faVacuum } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">

      <nav className="navbar">
      <div className="Logo">
      <FontAwesomeIcon icon={faVacuum} />
        </div>
        <div className="Home-page">
          <h1>Home</h1>
        </div>
        <div className="Reviews-page">
          <h1>Customer Reviews</h1>
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
        <h1>Hello World!</h1>
      </main>


      <footer className="App-footer">
        <h1>Contact number: 999</h1>
      </footer>
    </div>
  );
}

export default App;
