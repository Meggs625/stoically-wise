import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = ({ theme }) => {

  const [quotes, setQuote] = useState([]);
  const [pics, setPics] = useState([]);

  const fetchData = () => {
    return fetch('https://stoic-server.herokuapp.com/random', {
    })
      .then(res => res.json())
      .then(data => setQuote(data))
  }

  const fetchPhotos = () => {
    return fetch('https://pixabay.com/api/?key=23483948-a9995475fd38e7480dc10e8df&q=birds&image_type=photo')
      .then(res => res.ok ? res.json() : console.log(res))
      .then(data => setPics(data.hits))
      .catch(err => console.log(err))
  }
  const randomPic = () => {
    const randomIndex =  Math.floor(Math.random() * pics.length)
    console.log((randomIndex), 'index')
    console.log(pics[1])
    return pics[randomIndex].largeImageURL
  }

  useEffect(() => {
    fetchData()
    fetchPhotos()
  }, [])


  const displayInfo = () => {
    return quotes.map(quote => (
      <section className='card'style={{backgroundImage: `url('${randomPic()}')`, backgroundColor: 'rgba(0,0,0,0.5)', opacity: '.75'/*add no repeat*/}}>
        <h2 className='quote'>{quote.body}</h2>
        <p className='author'>{quote.author}</p>
      </section>
    ))
  }

  // const displayInfo = () => {
  //   return (
  //     <section className='card' style={{backgroundImage: `url('${pics[0].largeImageURL}')`, backgroundColor: 'rgba(0,0,0,0.5)', opacity: '.75', repeat: 'none'}}>
  //       <h2 className='quote'>{quote.body}</h2>
  //       <p className='author'>{quote.author}</p>
  //     </section>
  //   )
  // }

  return (
   
    <section className='main-display' >
      {displayInfo()}
    </section>  
    )

}

export default Quote;


