import React, { useState } from 'react';
import './ThemeForm.css';


const ThemeForm = ({ updateTheme }) => {

  const [theme, setTheme] = useState('')

  const handleClick = (event) => {
    event.preventDefault();
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
        onClick={event => handleClick(event)}
      />      
    </form>
  )

}

export default ThemeForm;