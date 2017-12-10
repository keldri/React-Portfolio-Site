import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="menu__button">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" preserveAspectRatio="xMidYMid">
            <path d="M127.634 219.429v73.143h768.731v-73.143h-768.731zM127.634 548.571h768.731v-73.143h-768.731v73.143zM127.634 804.571h768.731v-73.143h-768.731v73.143z"></path>
          </svg>
        </div>
        <div className="logo"><h4>Kate Eldridge</h4></div>
        <nav className="menu">
          <div className="menu__wrapper">
            <ul className="menu__items">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='/SingleProjectPage'>SingleProjectPage</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;