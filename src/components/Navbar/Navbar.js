import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import owlLogo from '../../images/owl.png'

const Navbar = () => {
  const location = useLocation();
  return (
    <section className='nav-bar'>  
      <Link to='/' className='home-link'>  
        <div className='brand'>
          <img src={owlLogo} alt='owl logo' className='logo'/>
          <h1 className='brand-name'>Daily Wisdom</h1>
        </div>
      </Link>
      {location.pathname === '/quote' && 
        <div className='links'>
          <Link to='/' className='new-theme'>Select New Theme</Link>
          <Link to='/favorites' className='view-favorites'>View Favorites</Link>      
        </div>}
    </section>
  )
}

export default Navbar