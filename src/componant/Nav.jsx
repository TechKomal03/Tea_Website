import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <div>
      
      <div className="nav">
        <div className="nav-list">
          <ul>
            <Link to={'/'}><li className='list'>Home</li> </Link>
            <li className='list'>Shop</li>
            <li className='list'>Product</li>
            <li className='list'>Blog</li>
            <Link to={'/contact'}><li className='list'>Contact</li></Link>
          </ul>
        </div>
        <div className="navlogo">
          <img src="image/teataste_logo.png" alt="Logo" />
        </div>
        <div className="navicon">
          <button>English</button>
          <button>USD</button>
          <Link to={'/Login'}><button>Login</button></Link>
        </div>
      </div>
   
    </div>
  );
}

export default Nav;