import React, { useState, useEffect } from 'react';
import './Quote.css';
import unSaved from '../../images/unSavedBulb.png';
import saved from '../../images/savedBulb.png';
import PropTypes from 'prop-types';

const Quote = ({ theme, retrieveFromStorage }) => {

  const [quotes, setQuote] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');
  const [favorites, setFavorites] = useState([]);
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
      .then(data => randomPic(data.hits))
      .catch(err => console.log(err))      
   }

  const randomPic = (allPics) => {
    const randomIndex =  Math.floor(Math.random() * allPics.length)
    setCurrentPhoto(allPics[randomIndex].largeImageURL)
  }

  useEffect(() => {
    if(!theme) {
      retrieveFromStorage()
    }
    fetchData()   
    fetchPhotos()
  }, [theme])

  // useEffect(() => {
  //   fetchPhotos()
  // }, [quotes])

  const toggleFavorites = event => {
    event.preventDefault();
    const locatedQuote = favorites.find(favorite => favorite.id === quotes[0].id)

    if(locatedQuote) {
      deleteFavorite()
    } else {
      addToFavorites()
    }
    toggleImage()
    console.log(favorites)
  }

  const addToFavorites = () => {
    const newFavorite = {
      id: quotes[0].id,
      quote: quotes[0].body,
      author: quotes[0].author,
      currentPhoto
    }
    setFavorites([...favorites, newFavorite])
  }

  const deleteFavorite = () => {
    const keptFavorites = favorites.filter(favorite => favorite.id !== quotes[0].id)
    setFavorites(keptFavorites)
  }

  const toggleImage = () => {
    setFavorite(!favorite)
  }

  const getErrorCode = (res) => {
    const resErrorCode = res.status;
    setErrorCode(resErrorCode)
  }


  const displayInfo = () => {
    return quotes.map(quote => (
      <section className='full-background' style={{backgroundImage: `url('${currentPhoto}')`, backgroundColor: 'rgba(0,0,0,0.5)'/*add no repeat*/}}>
        <div className='quote-info' key={quote.id}>
          <div className='favorite-container'>
            <button onClick={event => toggleFavorites(event)} className='favorite-btn'><img src={favorite ? saved : unSaved} alt='favorites lightbulb' className='lightbulb rotate-scale-up'/></button>
          </div>     
            <h2 className='quote'>{quote.body}</h2>
            <p className='author'>{quote.author}</p>
        </div>
      </section>
    ))
  }

  return (   
    <section className='main-display' >
      {errorCode && <h2>Something went wrong. Please refresh and try again</h2> }
      {!currentPhoto && <h2>Please try another theme</h2>}
      {(!errorCode && currentPhoto) && displayInfo()}
    </section>  
    )

}

export default Quote;


Quote.propTypes = {
  theme: PropTypes.string,
  retrieveFromStorage: PropTypes.func.isRequired
}