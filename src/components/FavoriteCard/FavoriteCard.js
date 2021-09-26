import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = ({ id, quote, author, picture}) => {
  return (
    <h1>{quote}</h1>
  )
}

export default FavoriteCard;