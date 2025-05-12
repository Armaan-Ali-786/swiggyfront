import React, { useContext, useEffect, useState } from 'react';
import { context } from '../Global/MainContext';
import journey11 from '../images/jorney-image.png'
import journey12 from '../images/jorney-image2.png'
import journey13 from '../images/jorney-image3.png'
import journey14 from '../images/jorney-image4.png'
import journey15 from '../images/jorney-image5.png';


export default function ThumbCarousel ({mainref}) {
   let images = [journey11,journey12,journey13,journey14,journey15]


    let [change,setChange] = useState(mainref)
    
    useEffect(()=>{
      setChange(mainref)
    },[mainref])
    


  return (
    <div className="w-full">
      {
        images.map((image, index) => (
          <div
            key={index}
            className="thumbnail-item"
            style={{display:(change == index) ? 'block' : 'none'}}
          >
            <img src={image} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))
      }
    </div>
  );
};

