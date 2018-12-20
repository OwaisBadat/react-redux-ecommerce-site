import React from 'react'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

import NavCSS from './Nav.css'

function Nav({cart}){
  return  (
      <div>
        <header id="home">
          <div className="hero">
            <div className="overlay" />
            <h1>FunkYoPop</h1>
          </div>
        </header>
        <div className="sticky-wrapper">
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/'>FunkoPOPS</NavLink></li>
              <li><NavLink to='/'>Apparel</NavLink></li>
              <li><NavLink to='/'>Skate</NavLink></li>
              <li><NavLink to='/cart'>MyCart({cart.length})</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

function mapStateToProps(state){
  return{
    cart: state.cart
  }
}
export default connect(mapStateToProps)(Nav)
