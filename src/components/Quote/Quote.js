import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = ({ theme }) => {

  const [quote, setQuote] = useState([]);
  const [pics, setPics] = useState([]);

  const fetchData = () => {
    return fetch('https://stoic-server.herokuapp.com/random', {
    })
      .then(res => res.json())
      .then(data => setQuote(data))
  }

  const fetchPhotos = () => {
    return fetch(`https://pixabay.com/api/?key=23483948-a9995475fd38e7480dc10e8df&q=${theme}&image_type=photo`)
      .then(res => res.ok ? res.json() : console.log(res))
      .then(data => setPics(data.hits))
      .catch(err => console.log(err))
  }
  const randomPic = () => {
    const randomIndex =  Math.floor(Math.random() * pics.length)
    
    return pics[randomIndex].largeImageURL
  }

  useEffect(() => {
    fetchData()
    // fetchPhotos()
  }, [])

  useEffect(() => {
    fetchPhotos()
  }, [])

  // const displayInfo = () => {
  //   return (
      
  //   )
  // }

  return (
   
    <section className='main-display' style={{backgroundImage: `url('${randomPic()}')`, backgroundColor: 'rgba(0,0,0,0.5)', opacity: '.75', repeat: 'none'}}>
      <section className='card'>
        <h2 className='quote'>{quote.body}</h2>
        <p className='author'>{quote.author}</p>
      </section>    
    </section>  
    )

}

export default Quote;


