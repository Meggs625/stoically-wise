import React, { useState, useEffect } from 'react';
import './Quote.css';
import { fetchQuote, fetchPhotos } from '../../utils/apiCalls';
import add from '../../images/icons8-add-50.png';
import PropTypes from 'prop-types';

const Quote = ({ theme, retrieveThemeFromStorage, addToFavorites }) => {

  const [quote, setQuote] = useState(null);
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [errorCode, setErrorCode] = useState('')

  const getQuote = () => {
   fetchQuote('https://stoic-quotes.com/api/quote')
      .then(res => res.ok ? res.json() : getErrorCode(res))
      .then(data => setQuote(data))
      .catch(err => console.log(err))
  }

  const getPhotos = () => {
    fetchPhotos(`https://pixabay.com/api/?key=46706062-a41e7446e737931c505f890d3&q=${theme}&image_type=photo`)
      .then(res => res.ok ? res.json() : console.log(res))
      .then(data => randomPic(data.hits))
      .catch(err => console.log(err))      
   }

  const randomPic = (allPics) => {
    const randomIndex =  Math.floor(Math.random() * allPics.length)
    setCurrentPhoto(allPics[randomIndex].largeImageURL)
  }

  useEffect(() => {
    if(!theme) {
      retrieveThemeFromStorage()
    }
    getQuote();   
    getPhotos();
  }, [theme])

  const createFavorite = event => {
    event.preventDefault();
    const newFavorite = {
      id: crypto.randomUUID(),
      quote: quote?.text,
      author: quote?.author,
      currentPhoto
    }
    addToFavorites(newFavorite);
  }

  const getErrorCode = (res) => {
    const resErrorCode = res.status;
    setErrorCode(resErrorCode)
  }
  
  return (   
    <section className='main-display' >
      {errorCode && <h2>Something went wrong. Please refresh and try again</h2> }
      {!currentPhoto && <h2>Please try another theme</h2>}
      {(!errorCode && currentPhoto && quote) && (
        <section className='full-background' key={quote.id} style={{backgroundImage: `url('${currentPhoto}')`, backgroundColor: 'rgba(0,0,0,0.5)'}}>
        <div className='quote-info' >
          <div className='favorite-container'>
            <button onClick={event => createFavorite(event)} className='favorite-btn'><img src={add} alt='add to favorites' className='plus-sign rotate-scale-up'/></button>
          </div>     
            <h2 className='quote'>{quote.text}</h2>
            <p className='author'>{quote.author}</p>
        </div>
      </section>
    )
    }
    </section>  
  )
}

export default Quote;


Quote.propTypes = {
  theme: PropTypes.string,
  retrieveThemeFromStorage: PropTypes.func.isRequired,
  addToFavorites: PropTypes.func
}

