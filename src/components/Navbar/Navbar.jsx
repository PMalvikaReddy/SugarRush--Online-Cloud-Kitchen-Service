import React,{useState} from 'react';
import images from '../../constants/images';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
const[toggleMenu,setToggleMenu]=useState(false);
return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.logoname} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home" >Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#menu">menu</a></li>
      <li className='p__opensans'><a href="#chef's Word">Chef's Word</a></li>
      <li className='p__opensans'><a href="#gallery">Gallery</a></li>
      <li className='p__opensans'><a href="#Footer">Contact</a></li>

    </ul>
    {/* <div className='app__navbar-login'>
      <a href="#login" className='p__opensans'>Log in/ Register</a>
    <div/>
    <a href='#login' className='p__opensans'>Book Table</a>
    </div> */}
    <div className='app__navbar-smallscreen'>
    <a href="#click" className='p__opensans' onClick={()=>setToggleMenu(true)}>options</a>
    
    {toggleMenu &&(
    <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
      <div className='overlay__close'>
    <a href="#click" className='p__opensans' onClick={()=>setToggleMenu(false)}>Close</a>
    </div>
    <ul className='app__navbar-smallscreen_links'>
    <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#chef's Word" onClick={() => setToggleMenu(false)}>Chef's Word</a></li>
              <li><a href="#gallery" onClick={() => setToggleMenu(false)}>Gallery</a></li>
              <li><a href="#Footer" onClick={() => setToggleMenu(false)}>Contact</a></li>
    </ul>
    </div>
    )}
    </div>
  </nav>
)
}

export default Navbar;
