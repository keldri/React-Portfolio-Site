import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/projects'>Projects</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;