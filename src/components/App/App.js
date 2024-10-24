import React, { useState, useEffect } from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import ThemeForm from '../ThemeForm/ThemeForm';
import Quote from '../Quote/Quote';
import Navbar from '../Navbar/Navbar';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer'
import './App.css';

const App = () => {

  const [chosenTheme, setChosenTheme] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    retrieveThemeFromStorage();
    retrieveFavoritesFromStorage();
}, [])

  const updateTheme = (inputTheme) => {
    storeTheme(inputTheme)
    setChosenTheme(inputTheme);
  }

  const storeTheme = (theme) => {
    localStorage.setItem('chosenTheme', JSON.stringify(theme))
  }

  const retrieveThemeFromStorage = () => {
    const storedTheme = JSON.parse(localStorage.getItem('chosenTheme'))
    setChosenTheme(storedTheme)
  }
  
  const retrieveFavoritesFromStorage = () => {
    const retreivedFavorites = JSON.parse(localStorage.getItem('savedFavorites'));
    if(retreivedFavorites) {
      setFavorites(retreivedFavorites)
    }
  }

  const addToFavorites = (newFavorite) => {
    const updatedFavorites = [...favorites, newFavorite];
    localStorage.setItem("savedFavorites", JSON.stringify(updatedFavorites))
    setFavorites(updatedFavorites);
  }

  const deleteFavorite = (id) => {
    const keptFavorites = favorites.filter(favorite => favorite.id !== id)
    setFavorites(keptFavorites)
    localStorage.setItem("savedFavorites", JSON.stringify(keptFavorites))
  }

  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => 
          <div className='landing-page'>
            <div className='welcome-header'>
              <h1 >Welcome</h1>
              <h2>Choose a photo theme</h2>
            </div>
            <ThemeForm updateTheme={updateTheme}/> 
            {chosenTheme && 
              <Link to='/quote'>
              <button className='previous-theme-btn'>{`Use previous theme: ${chosenTheme}`}</button></Link>}
          </div>}
        />
        <Route exact path='/quote' render={() => 
          <Quote 
          theme={chosenTheme} 
          retrieveThemeFromStorage={retrieveThemeFromStorage}
          addToFavorites={addToFavorites}/>}
        />
        <Route exact path='/favorites' render={() => 
          <FavoritesContainer 
            allFavorites={favorites}
            deleteFavorite={deleteFavorite}/>
        }/>
        <Route render={() => <h1>There appears to be an error. Please check your site path and try again</h1>} />
      </Switch> 
      <footer>
          <a href='https://pixabay.com/' className='credit' target="_blank">Images from Pixabay</a>
          <a href='https://github.com/benhoneywill/stoic-quotes?tab=readme-ov-file' className='credit' target="_blank">Quotes from Stoic Wisdom API</a>
      </footer>
    </main>
  );
}

export default App;
