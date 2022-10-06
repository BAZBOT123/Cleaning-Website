import '../components/intro.css';
import { Link } from "react-router-dom"
import React, { Component } from 'react';


export default function Intro() {
    return (

        <main className="App-header">
        <div>
      <Link to='/about'>
      <button type="button" className="btn btn-info">Enter</button>
      </Link>
      </div>
      </main>
    );
}
