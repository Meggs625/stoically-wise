import React, { useState } from 'react';
import './ThemeForm.css';


const ThemeForm = () => {

  const [theme, setTheme] = useState('')


return (
  <section>
    <h2>Welcome! Enter a Theme</h2>
    <form>
      <input
        type='text'
        placeholder='Ex: forest, bird, flowers...'
        name='Theme'
        value={theme}
        onChange={event => setTheme(event.target.value)}
      />
    
    </form>
  </section>
)

}

export default ThemeForm;