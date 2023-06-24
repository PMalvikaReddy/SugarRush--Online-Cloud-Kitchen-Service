import React from 'react';
import { SubHeading } from '../../components';

import images from '../../constants/images';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper secion__padding' id="home">
 <div className='app__wrapper_info'>
  <br></br>
<SubHeading title="Chase the New Flavour"/>
<h1 className='app__header-h1'>The Key to Fine Dining</h1>
<p className='p__opensans' style={{margin:'2rem 0'}}>food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy.</p>
<button type="button" className='custom__button'>Explore Menu</button>
 </div>

 <div className='app__wrapper_img'>
<img src={images.welcome} alt='headerImg'/>
 </div>
  </div>
);

export default Header;
