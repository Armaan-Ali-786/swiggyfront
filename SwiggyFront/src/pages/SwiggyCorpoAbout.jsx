import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function SwiggyCorpoAbout() {

  useGSAP(
      () => {
          gsap.from('.box', { y: 200,duration:2,opacity:0 });
      }
  );
  
  return (
    <section className='bg-[#FE5005] h-[60vh]'>
        <div className='swiggy-corpo-bg h-full flex items-center justify-center'>
            <div className='text-white text-center box'>
                <h2 className='font-semibold text-[50px] mb-[10px]'>About Swiggy</h2>
                <p className='text-[17px]'>
                    Swiggy is a new-age consumer-first organization offering an easy-to-use convenience<br/> platform, accessible through a unified app.
                </p>
            </div>
        </div>
    </section>
  )
}
