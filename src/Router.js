import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './components/HomePage'
import CartPage from './components/CartPage'

const Router = () => (
  <Switch>
    <Route exact path ='/' component={HomePage} />
    <Route exact path ='/cart' component={CartPage} />
  </Switch>
)

export default Router;
