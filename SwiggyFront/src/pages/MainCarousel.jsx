import React, { useContext, useEffect, useState,useRef,useCallback } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import journey1 from '../images/journey1.png'
import journey2 from '../images/journey2.png'
import journey3 from '../images/journey3.png'
import journey4 from '../images/journey4.png'
import journey5 from '../images/journey5.png';
import { context } from '../Global/MainContext';
import journey11 from '../images/jorney-image.png'
import journey12 from '../images/jorney-image2.png'
import journey13 from '../images/jorney-image3.png'
import journey14 from '../images/jorney-image4.png'
import journey15 from '../images/jorney-image5.png';
// import ThumbCarousel from './ThumbCarousel';

export default function ThumbnailCarousel  ()  {
  // let images = [journey1,journey2,journey3,journey4,journey5]
  let {carouselRef} = useContext(context)

  let changeItem = (event) => {
    carouselRef.current = event.item.index
    console.log(carouselRef.current)
  }

  let images = [journey11,journey12,journey13,journey14,journey15]

  return (
    <>
    <OwlCarousel className='owl-theme' center loop={false} items={1} onChanged={changeItem} dots={false}>   
        <div className='item'>
          <img src={journey1} alt={'image is not available'} />
        </div>
        <div className='item'>
          <img src={journey2} alt={'image is not available'} />
        </div>
        <div className='item'>
          <img src={journey3} alt={'image is not available'} />
        </div>
        <div className='item'>
          <img src={journey4} alt={'image is not available'} />
        </div>
        <div className='item'>
          <img src={journey5} alt={'image is not available'} />
        </div>
    </OwlCarousel>
    {/* <ThumbnailCarousel mainref={carouselRef.current}/> */}
    {/* <div className="w-full">
      {
        images.map((image, index) => (
          <div
            key={index}
            className="thumbnail-item"
            style={{display:(carouselRef.current == index) ? 'block' : 'none'}}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))
      }
    </div> */}
    </>
  );
};


