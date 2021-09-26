import React, { useState, useEffect } from 'react';
import './Quote.css';
import unSaved from '../../images/unSavedBulb.png';
import saved from '../../images/savedBulb.png';
import PropTypes from 'prop-types';

const Quote = ({ theme, retrieveFromStorage }) => {

  const [quotes, setQuote] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState({});
  const [favorites, setFavorites] = useState([]);

  const fetchData = () => {
    return fetch('https://stoic-server.herokuapp.com/random', {
    })
      .then(res => res.json())
      .then(data => setQuote(data))
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

  const addToFavorites = event => {
    event.preventDefault();
    const newFavorite = {
      id: Date.now(),
      quotes,
      currentPhoto
    }
    toggleImage()
    setFavorites([...favorites, newFavorite])
  }

  const toggleImage = () => {
    setFavorite(!favorite)
  }


  const displayInfo = () => {
    return quotes.map(quote => (
      <section className='full-background' style={{backgroundImage: `url('${currentPhoto}')`, backgroundColor: 'rgba(0,0,0,0.5)'/*add no repeat*/}}>
        <div className='quote-info'>
          <div className='favorite-container'>
            <button onClick={event => addToFavorites(event)} className='favorite-btn'><img src={favorite ? saved : unSaved} alt='favorites lightbulb' className='lightbulb rotate-scale-up'/></button>
          </div>
          <h2 className='quote'>{quote.body}</h2>
          <p className='author'>{quote.author}</p>
        </div>
      </section>
    ))
  }

  return (
   
    <section className='main-display' >
      {displayInfo()}
    </section>  
    )

}

export default Quote;


Quote.propTypes = {
  theme: PropTypes.string,
  retrieveFromStorage: PropTypes.func.isRequired
}