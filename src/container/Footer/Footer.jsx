import React from 'react';

// import { FooterOverlay,Newsletter, SubHeading } from '../../components';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'id='Footer'>
    {/* <FooterOverlay/>
    <Newsletter/> */}
    <div className='app__footer-links'>
    <div className='app_-footer-links_contact'>
    <h1 className='app__footer-headtext'>Contact Us</h1>
    <p className='p__opensans'>Address bangalore,India, 560076</p>
    <p className='p__opensans'>+91 985684295</p>
    <p className='p__opensans'>+91 985684295</p>
    </div>
    <div className='app__footer-links_logo'>
      <img src={images.logoname} style={{width:'250px'}}alt="footer_logo"/>
      <p className='p__opensans'>The best way to find yourself is to lose <br/>yourself in the service of others.</p>
      <SubHeading  />
    </div>
    <div className='app_-footer-links_work'>
    <div className='app_-footer-links_working'>
    <h1 className='app__footer-headtext'>Working Hours</h1>
    <p className='p__opensans'>Monday-Friday</p>
    <p className='p__opensans'>08:00am-12:00am</p>
    <p className='p__opensans'>Saturday-Sunday</p>
    <p className='p__opensans'>08:00am-12:00am</p>
    </div>
  </div>
  </div>
  <div className='footer__copyright'>
    <p className='p__opensans'>2023. All Rights Reserved</p>
  </div>
  </div>
  
  
);

export default Footer;
