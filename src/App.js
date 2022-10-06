import './App.css';
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import Home from './components/Home'
import Reviews from './components/Reviews'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Intro from './components/Intro'


export default function App() {
  const [cleaners, setCleaners] = useState(null)
  const url = 'http://localhost:3000/'

  useEffect(() => {
    fetch(url + cleaners)
      .then(res => res.json())
      .then(res => {
       console.log(res)

      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])


  return (
    <div className='main-page'>
      <main>
        <Routes>
          <Route path='/' element={< Intro />} />
          <Route path='/home' element={< Home />} />
          <Route path='/reviews' element={< Reviews cleaners={cleaners} setCleaners={setCleaners} />} />
         <Route path='/services' element={< Services cleaners={cleaners} setCleaners={setCleaners} />} />
         <Route path='/about' element={< About cleaners={cleaners} setCleaners={setCleaners} />} />
         <Route path='/contact' element={< Contact cleaners={cleaners} setCleaners={setCleaners} />} />
        </Routes>
      </main>
    </div>

  );
}



