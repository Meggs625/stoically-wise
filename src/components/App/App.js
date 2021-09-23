import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeForm from '../ThemeForm/ThemeForm';
import Quote from '../Quote/Quote';
import Navbar from '../Navbar/Navbar';
import './App.css';

const App = () => {

  const [chosenTheme, setChosenTheme] = useState('');


  const updateTheme = (inputTheme) => {
    storeTheme(inputTheme)
    setChosenTheme(inputTheme);
  }

  const storeTheme = (theme) => {
    localStorage.setItem('chosenTheme', JSON.stringify(theme))
  }

  const retrieveFromStorage = () => {
    const storedTheme = JSON.parse(localStorage.getItem('chosenTheme'))
    setChosenTheme(storedTheme)
  }

  useEffect(() => {
    if(localStorage) {
      retrieveFromStorage()
    }
  }, [chosenTheme])



  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => 
          <div className='landing-page'>
            <div className='welcome-header'>
              <h1 >Welcome</h1>
              <h2>Choose a theme</h2>
            </div>
            <ThemeForm updateTheme={updateTheme}/> 
            {chosenTheme && 
              <button>{`Use previous theme: ${chosenTheme}`}</button>}
          </div>}
        />
        <Route exact path='/quote' render={() => 
          <Quote 
          theme={chosenTheme} 
          retrieveFromStorage={retrieveFromStorage}/>}
        />
        <Route render={() => <h1>Nothing to see here</h1>} />
      </Switch> 
      <footer>
          <p className='credit'>Images by pixabay</p>
          <p className='credit'>Quotes from stoic-api</p>
      </footer>
    </main>
  );
}

export default App;
