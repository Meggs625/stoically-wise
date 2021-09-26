import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Navbar.css';
import owlLogo from '../../images/owl.png'

const Navbar = () => {
  const location = useLocation();
  return (
    <section className='nav-bar'>    
      <div className='brand'>
        <img src={owlLogo} alt='owl logo' className='logo'/>
        <h1 className='brand-name'>Daily Wisdom</h1>
      </div>
      {location.pathname === '/quote' && 
        <Link to='/' className='new-theme-link'>Select New Theme</Link>}
    </section>
  )
}

export default Navbar