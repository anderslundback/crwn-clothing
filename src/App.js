import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <Router>
      <Switch>
        <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
