import React, { useEffect, useState } from 'react';
import PlanetImage from './media/mercury.png'
import BookImage from './media/book.png'
import './App.css';

function App() {
  const [mercury, setMercury] = useState()
  const [date, setDate] = useState('')
  

  useEffect(() => {
    const currentDate = new Date()
    setDate(currentDate.toLocaleDateString())

  }, [])


  useEffect(() => {
    fetch(`https://mercuryretrogradeapi.com?date=${date}`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return setMercury(data.is_retrograde)
      
    })
  }, [])


  return (
    <div className="App">
      <p className='dayTitle'>Today: {date} </p>
      <h1 className='mercuryTitle'>
        {mercury ? 'Mercury is Retrogade!!'
        : 'Mercury is Not Retrograde.'}
      </h1>

      <div className='imagesContainer'>
        <img src={PlanetImage} className='planetImage'/>
        <div className='calendarButton'>
          <p>Check other days</p>
          <img src={BookImage} className='bookImage'/>
        </div>
        
      </div>
      
      <div className='starContainer'>
        <div className='stars' id='starPosition1'></div>
        <div className='stars' id='starPosition2'></div>
        <div className='stars' id='starPosition3'></div>
        <div className='stars' id='starPosition4'></div>
        <div className='stars' id='starPosition5'></div>
        <div className='stars' id='starPosition6'></div>
      </div>
     

    </div >
  );
}

export default App;
