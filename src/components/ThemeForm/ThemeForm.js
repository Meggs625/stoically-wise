import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ThemeForm.css';


const ThemeForm = ({ updateTheme }) => {

  const [theme, setTheme] = useState('')

  const handleClick = () => {
    updateTheme(theme)
  }


  return (
    <form>
      <input
        type='text'
        placeholder='Ex: forest, bird, flowers...'
        name='Theme'
        value={theme}
        onChange={event => setTheme(event.target.value)}        
      />      
      <Link to='/quote'>
        <button 
          className='enter-btn'
          onClick={() => handleClick()}>Enter</button></Link>
    </form>
  )

}

export default ThemeForm;

ThemeForm.propTypes = {
  updateTheme: PropTypes.func
}