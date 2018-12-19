import React from 'react'

import { NavLink } from 'react-router-dom'

import NavCSS from './Nav.css'

export default function Nav(props){
  return  (
      <div>
        <header id="home">
          <div className="hero">
            <div className="overlay" />
            <h1>GAGonThis.com</h1>
          </div>
        </header>
        <div className="sticky-wrapper">
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/'>Pranks</NavLink></li>
              <li><NavLink to='/'>Gag Gifts</NavLink></li>
              <li><NavLink to='/'>Clothing</NavLink></li>
              <li><NavLink to='/cart'>MyCart </NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
