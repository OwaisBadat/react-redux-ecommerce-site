import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router'
import Nav from './components/Nav'

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './components/checkoutpage';
import { NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Nav {...this.props}/>
        <Router />
      </div>
    );
  }
}

export default App;
