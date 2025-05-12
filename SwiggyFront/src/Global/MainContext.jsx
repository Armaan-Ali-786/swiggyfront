import React, { useRef, useState } from 'react'
import { createContext } from 'react';
export let context = createContext();

export default function MainContext({children}) {

  let [filtercount,setFiltercount] = useState(0);
  let [datachange,setDatachange] = useState(0);
  let carouselRef = useRef(0)

  let data = {filtercount,setFiltercount,datachange,setDatachange,carouselRef}

  return (
    <>
        <context.Provider value={data}>
            {children}    
        </context.Provider> 
    </>
  )
}
