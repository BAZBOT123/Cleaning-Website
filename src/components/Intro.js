import '../components/intro.css';
import { Link } from "react-router-dom"
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBroom } from '@fortawesome/free-solid-svg-icons';


export default function Intro() {
    return (
       
            <main className="intro-main">
                <div>
                    <Link to='/home'>
                        <div className="logo-svg">
                            <FontAwesomeIcon icon={faBroom}></FontAwesomeIcon>
                        </div>
                    </Link>
                </div>
            </main>
  
    );
}
