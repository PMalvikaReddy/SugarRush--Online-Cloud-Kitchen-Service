import React from 'react';

import { SubHeading } from "../../components";
import images from "../../constants/images";
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id="chef's Word">
   <div className='app__wrapper_img app__wrapper_img-reverse'>
   <img src={images.chef}  alt="chef" />
    </div>
    <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>
    <div className='app__chef-content'>
      <div className='app__chef-content_quote'>
      <img src={images.quote} alt="quote" />
      <p className='p__opensans'>People who love to eat are always the best people." "To eat is a necessity, but to eat intelligently is an art." "We all eat, an it would be a sad waste of opportunity to eat badly." "If you really want to make a friend, go to someone's house and eat with him...the people who give you their food give you their heart.</p>
      </div>
      <div className='app__chef-sign'>
        <p > P MALVIKA REDDY</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>

    </div>
    </div>
  </div>
);

export default Chef;
