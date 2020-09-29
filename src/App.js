import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTER from './constants/routes';
import { Browse, Home, Signin, Signup } from './pages';
export default function App() {
  return (
  <Router>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path='/signin'>
        <Signin />
      </Route>
      <Route exact path='/signup'>
        <Signup/>
      </Route>
      <Route exact path={ROUTER.HOME}>
        <Home />
      </Route>
  </Router>
  )
}


