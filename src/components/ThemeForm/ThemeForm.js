import React, { useState } from 'react';
import './ThemeForm.css';


const ThemeForm = ({ updateTheme }) => {

  const [theme, setTheme] = useState('')

  const handleClick = (event) => {
    event.preventDefault();
    updateTheme(theme)
  }


  return (
    <section>
      <h2>Choose a Theme</h2>
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
    </section>
  )

}

export default ThemeForm;