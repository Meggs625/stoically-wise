import React from 'react';
import './FavoriteCard.css';

const FavoriteCard = ({ id, quote, author, picture}) => {
  return (
    <section>
      <img src={picture} alt='selected theme' />
      <div>
        <p>{quote}</p>
        <p>{author}</p>
      </div>
    </section>
  )
}

export default FavoriteCard;