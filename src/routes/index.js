import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Register, Login } from '../pages';
import { Navbar, Footer } from '../components';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/'>
          <Navbar />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
