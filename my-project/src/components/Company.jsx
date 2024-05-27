import React from 'react'
import img1 from "../assets/google.png"
import img2 from "../assets/micro.png"
import img3 from "../assets/istock.png"
import img4 from "../assets/airbnb.png"
import img5 from "../assets/walmart.png"


const Company = () => {
  return (
    <div className='grid grid-cols-5 opacity-65'>

      <img src={img1} draggable='false' />
      <img src={img2} draggable='false' />
      <img src={img3} draggable='false' />
      <img src={img4} draggable='false' />
      <img src={img5} draggable='false' />
    </div>
  )
}

export default Company
