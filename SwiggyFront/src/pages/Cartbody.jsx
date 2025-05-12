import React from 'react'

export default function Cartbody() {
  return (
    <div className='max-w-[1320px] mx-auto'>
        <div className='text-center my-[80px]'>
            <div className='bg-cart h-[300px] w-[300px] '></div>
            <h2 className='text-[18px] font-semibold mb-1'>Your Cart Is Empty</h2>
            <p className='text-[14px] mb-5'>You can go to the home page to view more restatrants</p>
            <button className='uppercase mt-3 bg-[#FA7F1A] text-white px-[20px] py-[10px]'>See Restaurants near you</button>
        </div>
    </div>
  )
}
