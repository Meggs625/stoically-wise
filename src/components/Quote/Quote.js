import React, { useState, useEffect } from 'react';
import './Quote.css';
import unSaved from '../../images/unSaved.png';
import saved from '../../images/new-purple-light.png';
import add from '../../images/icons8-add-50.png';
import PropTypes from 'prop-types';

const Quote = ({ theme, retrieveThemeFromStorage, toggleFavorites }) => {

  const [quotes, setQuote] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState('');
  // const [favorites, setFavorites] = useState([]);
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
      retrieveThemeFromStorage()
    }
    fetchData()   
    fetchPhotos()
    // retrieveFavoritesFromStorage()
  }, [theme])

  // const retrieveFavoritesFromStorage = () => {
  //   const retreivedFavorites = 
  //     Object.keys(localStorage).filter(key => key !== 'chosenTheme')
  //       .map(item => JSON.parse(localStorage.getItem(item)))
  //   if(retreivedFavorites) {
  //     setFavorites(retreivedFavorites)
  //   }
  // }

  // const toggleFavorites = () => {
  //   const locatedQuote = favorites.find(favorite => favorite.id === quotes[0].id)
  //   if(locatedQuote) {
  //     deleteFavorite()
  //   } else {
  //     addToFavorites()
  //   }
  //   toggleImage()
  //   // updateStorage();
  // }

  const checkForFavorite = event => {
    event.preventDefault();
    const newFavorite = {
      id: quotes[0].id,
      quote: quotes[0].body,
      author: quotes[0].author,
      currentPhoto
    }
    toggleImage();
    toggleFavorites(newFavorite);
  }

  // const updateStorage = () => {
  //   console.log('updating')
  //   localStorage.setItem('favorites', JSON.stringify(favorites))
  // }

  // const addToFavorites = () => {
  //   const newFavorite = {
  //     id: quotes[0].id,
  //     quote: quotes[0].body,
  //     author: quotes[0].author,
  //     currentPhoto
  //   }
  //   localStorage.setItem(newFavorite.id, JSON.stringify(newFavorite))
  //   setFavorites([...favorites, newFavorite])
  // }

  // const deleteFavorite = () => {
  //   const keptFavorites = favorites.filter(favorite => favorite.id !== quotes[0].id)
  //   setFavorites(keptFavorites)
  //   localStorage.removeItem(quotes[0].id)
  // }

  const toggleImage = () => {
    console.log('toggling')
    setFavorite(!favorite)
  }

  const getErrorCode = (res) => {
    const resErrorCode = res.status;
    setErrorCode(resErrorCode)
  }


  const displayInfo = (data) => {
    return data.map(quote => (
      <section className='full-background' style={{backgroundImage: `url('${currentPhoto}')`, backgroundColor: 'rgba(0,0,0,0.5)'/*add no repeat*/}}>
        <div className='quote-info' key={quote.id}>
          <div className='favorite-container'>
            <button onClick={event => checkForFavorite(event)} className='favorite-btn'><img src={add} alt='add to favorites' className='plus-sign rotate-scale-up'/></button>
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
      {(!errorCode && currentPhoto) && displayInfo(quotes)}
    </section>  
    )

}

export default Quote;


Quote.propTypes = {
  theme: PropTypes.string,
  retrieveThemeFromStorage: PropTypes.func.isRequired
}

// {favorite ? saved : unSaved}