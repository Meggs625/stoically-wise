import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeForm from '../ThemeForm/ThemeForm';
import Navbar from '../Navbar/Navbar';
import './App.css';

function App() {
  return (
    <main>
      <Navbar />
      <Switch>
        <Route exact path='/' render={() => 
          <div>
            <h1>Hello!</h1>
            <ThemeForm /> 
          </div>}
        />

        <Route exact path='/quote' render={() => <h1>Quote</h1>}

        />
        <Route render={() => <h1>Nothing to see here</h1>} />
      </Switch>   
    </main>
  );
}

export default App;
