import '../components/reviews.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function Reviews() {

    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleText = () => {
        switch (number || hoverStar) {
            case 0:
                return "Evaluate";
            case 1:
                return "Disappointed 😞";
            case 2:
                return "Unsatisfied";
            case 3:
                return "Normal";
            case 4:
                return "Satisfied";
            case 5:
                return "Very Satisfied";
            default:
                return "Evaluate";
        }
    };

    const handlePlaceHolder = () => {
        switch (number || hoverStar) {
            case 0:
                return "Comment here...";
            case 1:
            case 2:
            case 3:
            case 4:
                return "What is your problem?";
            case 5:
                return "Why do you like the product?";
            default:
                return "Comment here...";
        }
    };


    return (
        <div className="App">

            <nav className="navbar">
                <div className="Logo">
                    <h1>Logo</h1>
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

                <div className="popup">
                    <div className="content">
                    <img src="https://media.baamboozle.com/uploads/images/59285/1607706108_132637" alt="banner" width="auto"></img>  
                        <div className="product">    
                        <p>How satisfied were you were our services?</p>   

                        </div>
                        

                        <div>
                            <h1>{handleText()}</h1>
                            {Array(5)
                                .fill()
                                .map((_, index) =>
                                    number >= index + 1 || hoverStar >= index + 1 ? (
                                        <AiFillStar
                                            onMouseOver={() => !number && setHoverStar(index + 1)}
                                            onMouseLeave={() => setHoverStar(undefined)}
                                            style={{ color: "orange" }}
                                            onClick={() => setNumber(index + 1)}
                                        />
                                    ) : (
                                        <AiOutlineStar
                                            onMouseOver={() => !number && setHoverStar(index + 1)}
                                            onMouseLeave={() => setHoverStar(undefined)}
                                            style={{ color: "orange" }}
                                            onClick={() => setNumber(index + 1)}
                                        />
                                    )
                                )}
                        </div>
                        <textarea placeholder={handlePlaceHolder()}></textarea>
                        <button className={` ${!number && "disabled"} `}>Submit</button>
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
