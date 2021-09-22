import React from 'react';
import './Navbar.css';
import owlLogo from '../../owl.png';

const Navbar = () => {
  return (
    <div className='brand'>
      <img src={owlLogo} alt='owl logo' className='logo'/>
      <h1 className='brand-name'>Daily Wisdom</h1>
    </div>
  )
}

export default Navbar