import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='app__menuItem'>
    <div className='app__menuItem-head'>
      <div className='app__menuitem-name'>
      <p className='p__cormorant' style={{color:'#FF0FF0'}}>{title}</p>
      </div>

      <div className='app__menuItem-dash'/>

      <div className='app__menuitem-price'>
      <p className='p__cormorant'>{price}</p>
      </div>
    </div>

  <div className='app__menuItem-sub'>
  <p className='p__opensans' style={{color:'#F0FFFF'}}>{tags}</p>
  </div>
  </div>
);

export default MenuItem;
