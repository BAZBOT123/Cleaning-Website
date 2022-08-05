import './App.css';
import { Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';
import Home from './components/Home'
import Reviews from './components/Reviews'


export default function App() {
  const [cleaners, setCleaners] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/' + cleaners)
      .then(res => res.json())
      .then(res => {
       console.log(res)

      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className='main-page'>
      <main>
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/reviews' element={< Reviews cleaners={cleaners} setCleaners={setCleaners} />} />
        </Routes>
      </main>
    </div>

  );
}



