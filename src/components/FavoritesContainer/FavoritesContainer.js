import React, {useState, useEffect} from 'react';
import './FavoritesContainer.css';

const FavoritesContainer = ({ allFavorites }) => {

  const showFavorites = allFavorites.map(favorite => console.log(favorite))

  return (
    <h1>{showFavorites}}</h1>
  )

}

export default FavoritesContainer;