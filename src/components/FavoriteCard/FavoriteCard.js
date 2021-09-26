import React from 'react';
import './FavoriteCard.css';
import deleteIcon from '../../images/delete.png';
import PropTypes from 'prop-types';


const FavoriteCard = ({ id, quote, author, picture, deleteFavorite}) => {
  return (
    <section className='card'> 
        <div className='delete-container'>
          <button className='delete-btn rotate-scale-up' onClick={() => deleteFavorite(id)}><img src={deleteIcon} alt='delete button' className='delete-icon'/></button>
        </div>
      <div className='img-container'>      
        <img src={picture} alt='selected theme' className='saved-img'/>
      </div>
      <div className='saved-quote-info'>        
        <p className='saved-quote'>{quote}</p>
        <p className='saved-author'>{author}</p>        
      </div>
    </section>
  )
}

export default FavoriteCard;

FavoriteCard.propTypes = {
  id: PropTypes.number,
  quote: PropTypes.string.isRequired,
  author: PropTypes.string,
  picture: PropTypes.string,
  deleteFavorite: PropTypes.func
}