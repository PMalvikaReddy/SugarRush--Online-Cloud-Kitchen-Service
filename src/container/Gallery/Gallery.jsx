import React from 'react';

import { SubHeading } from '../../components';
import {images} from '../../constants';
import './Gallery.css';

// const galleryImages=[images.gallery01, images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef=React.useRef(null);
const scroll=(direction)=>{
  const{current}=scrollRef;
  if(direction==='left'){
    current.scrollLeft-=300;
  }else{
    current.scrollLeft+=300;
  }
}

  return(
  <div className='app__gallery flex__center' id='gallery'>
    <div className='app__gallery-content'>
      <SubHeading title='Instagram'/>
      <h1 className='headtext__cormorant'>Photo Galley</h1>
      <p className='p__opensans' style={{color:'#AAAAAA',marginTop:'2rem'}}>
People who love to eat are always the best people." "To eat is
 a necessity, but to eat intelligently is an art." "We all eat,
  an it would be a sad waste of opportunity to eat badly." "If
   you really want to make a friend</p><br></br>
   <button type="button" className="custom__button">
          View More
        </button>
    </div>
    <div className='app__gallery-images'>
      <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery02, images.gallery03, images.gallery07, images.gallery05,images.gallery08,images.gallery04, images.gallery06, images.gallery01,images.gallery09,images.gallery10,images.gallery11].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
            ))}
            </div>



       <div className='app__gallery-images_arrows'>
      <p className='gallery__arrow_icon' onClick={()=>scroll('left')}>Left</p>
      <p className='gallery__arrow_icon' onClick={()=>scroll('right')}>Right</p>
      </div>
    </div>
  </div> 
);
  }

export default Gallery;
