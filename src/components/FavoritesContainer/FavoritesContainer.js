import React, {useState, useEffect} from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './FavoritesContainer.css';

const FavoritesContainer = ({ allFavorites }) => {

  const showFavorites = allFavorites.map(favorite => 
    <FavoriteCard 
      key={favorite.id}
      id={favorite.id}
      quote={favorite.quote}
      author={favorite.author}
      picture={favorite.currentPhoto}      
      />)

  return (
    <h1>{showFavorites}</h1>
  )

}

export default FavoritesContainer;