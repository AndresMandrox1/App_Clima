import React from 'react';
import Logo from '../img/AppClima.jpg'
import SearchBar from './SearchBar.jsx';

import './Nav.css';
import {Link} from 'react-router-dom';



function Nav({onSearch}) {
  return (
    <nav className="nav">
        <Link to='/'>
          <span className="Logo_desc">
            <img id="Logo" src={Logo}   alt="Logo" />
            <span>App Clima</span> 
          </span>
        </Link>
        <Link className= 'about' to='/about'>
          <span className='about'> About</span>
        </Link>
        <SearchBar onSearch={onSearch}/>
    </nav>
  );
};

export default Nav;
