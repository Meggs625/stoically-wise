import React, {useState, useEffect} from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './FavoritesContainer.css';

const FavoritesContainer = ({ allFavorites, deleteFavorite }) => {

  const showFavorites = allFavorites.map(favorite => 
    <FavoriteCard 
      key={favorite.id}
      id={favorite.id}
      quote={favorite.quote}
      author={favorite.author}
      picture={favorite.currentPhoto}  
      deleteFavorite={deleteFavorite}   
      />)

  return (
    <section className='favorites-display'>
    {allFavorites.length === 0 && <section className='no-favorites'><h1>Nothing saved yet. Find some quotes to save!</h1> </section>}
    {showFavorites}
    </section>
  )

}

export default FavoritesContainer;