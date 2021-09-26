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

  useEffect(() => {
    if(localStorage) {
      retrieveThemeFromStorage()
    }
    retrieveFavoritesFromStorage()
  }, [chosenTheme])

  // useEffect(() => {
  //   retrieveFavoritesFromStorage()
  // }, [favorites])

  const retrieveFavoritesFromStorage = () => {
    const retreivedFavorites = 
      Object.keys(localStorage).filter(key => key !== 'chosenTheme')
        .map(item => JSON.parse(localStorage.getItem(item)))
    if(retreivedFavorites) {
      setFavorites(retreivedFavorites)
    }
  }

  const toggleFavorites = (newFavorite) => {
    console.log(newFavorite, 'newFavorite')
    const locatedQuote = favorites.find(favorite => favorite.id === newFavorite.id)
    if(locatedQuote) {
      deleteFavorite(newFavorite)
    } else {
      addToFavorites(newFavorite)
    }
    // toggleImage()
    // updateStorage();
  }


  const addToFavorites = (newFavorite) => {
    // const newFavorite = {
    //   id: quotes[0].id,
    //   quote: quotes[0].body,
    //   author: quotes[0].author,
    //   currentPhoto
    // }
    localStorage.setItem(newFavorite.id, JSON.stringify(newFavorite))
    setFavorites([...favorites, newFavorite])
  }

  const deleteFavorite = (newFavorite) => {
    const keptFavorites = favorites.filter(favorite => favorite.id !== newFavorite.id)
    setFavorites(keptFavorites)
    localStorage.removeItem(newFavorite.id)
  }

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
              <Link to='/quote'>
              <button className='previous-theme-btn'>{`Use previous theme: ${chosenTheme}`}</button></Link>}
          </div>}
        />
        <Route exact path='/quote' render={() => 
          <Quote 
          key={Date.now()}
          theme={chosenTheme} 
          retrieveThemeFromStorage={retrieveThemeFromStorage}
          toggleFavorites={toggleFavorites}/>}
        />
        <Route exact path='/favorites' render={() => 
          <FavoritesContainer />
        }/>
        <Route render={() => <h1>Nothing to see here</h1>} />
      </Switch> 
      <footer>
          <a href='https://pixabay.com/' className='credit'>Images from Pixabay</a>
          <a href='https://stoic-wisdom.com/api' className='credit'>Quotes from Stoic Wisdom API</a>
      </footer>
    </main>
  );
}

export default App;
