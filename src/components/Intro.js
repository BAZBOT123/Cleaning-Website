import '../components/intro.css';
import { Link } from "react-router-dom"
import React from 'react';

export default function Intro() {
    return (
        <main className="intro-main">
            <div>
                <Link to='/home'>
                    <button type="button" className="btn btn-info">Enter</button>
                </Link>
            </div>
        </main>
    );
}
