import React from 'react';
import './FavoriteCard.css';
import deleteIcon from '../../images/delete.png'

const FavoriteCard = ({ id, quote, author, picture}) => {
  return (
    <section className='card'> 
      <img src={picture} alt='selected theme' className='saved-img'/>
      <div className='saved-quote-info'>
        <p className='saved-quote'>{quote}</p>
        <p className='saved-author'>{author}</p>
        <img src={deleteIcon} alt='delete button' className='delete-icon'/>
      </div>
    </section>
  )
}

export default FavoriteCard;