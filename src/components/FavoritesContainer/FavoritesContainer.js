import React, {useState, useEffect} from 'react';
import './FavoritesContainer.css';

const FavoritesContainer = () => {

  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    retrieveFavoritesFromStorage()
  },[])

  const retrieveFavoritesFromStorage = () => {
    const retreivedFavorites = 
      Object.keys(localStorage).filter(key => key !== 'chosenTheme')
        .map(item => JSON.parse(localStorage.getItem(item)))
    if(retreivedFavorites) {
      setFavorites(retreivedFavorites)
    }
  }

  return (
    <h1>Yip yip</h1>
  )

}

export default FavoritesContainer;