import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = ({ theme, retrieveFromStorage }) => {

  const [quotes, setQuote] = useState([]);
  const [pics, setPics] = useState([]);
  const [errorCode, setErrorCode] = useState('')

  const fetchData = () => {
    return fetch('https://stoic-server.herokuapp.com/random', {
    })
      .then(res => res.ok ? res.json() : getErrorCode(res))
      .then(data => setQuote(data))
      .catch(err => console.log(err))
  }

  const fetchPhotos = () => {
    return fetch(`https://pixabay.com/api/?key=23483948-a9995475fd38e7480dc10e8df&q=${theme}&image_type=photo`)
      .then(res => res.ok ? res.json() : console.log(res))
      .then(data => setPics(data.hits))
      .catch(err => console.log(err))
  }
  const randomPic = () => {
    const randomIndex =  Math.floor(Math.random() * pics.length)
    console.log(randomIndex)
    console.log(pics)
    return (pics[randomIndex].largeImageURL)
  }

  useEffect(() => {
    if(!theme) {
      retrieveFromStorage()
    }
    fetchData()   
    fetchPhotos()
  }, [theme])

  const getErrorCode = (res) => {
    const resErrorCode = res.status;
    setErrorCode(resErrorCode)
  }

  const displayInfo = () => {
    return quotes.map(quote => (
      <section className='full-background' style={{backgroundImage: `url('${randomPic()}')`, backgroundColor: 'rgba(0,0,0,0.5)'/*add no repeat*/}}>
        <div className='quote-info'>
          <h2 className='quote'>{quote.body}</h2>
          <p className='author'>{quote.author}</p>
        </div>
      </section>
    ))
  }

  return (
   
    <section className='main-display' >
      {(errorCode || pics.length === 0) && <h2>Something went wrong. Please refresh and try again</h2> }
      {(!errorCode && pics.length !== 0) && displayInfo()}
    </section>  
    )

}

export default Quote;


