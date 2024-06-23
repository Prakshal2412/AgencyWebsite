import React, { useState } from 'react'
import Meet from "../assets/video.jpg"



const Main = () => {
  const [cards]=useState([
    {
      title:'Card-1',
      text:`Lorem ipsum dolor sit amet consectetur.,<br/>Lorem, ipsum dolor.`
    },
    {
      title:'Card-2',
      text:`Lorem ipsum dolor sit amet consectetur.,<br/>Lorem, ipsum dolor.`
    },
    {
      title:'Card-3',
      text:`Lorem ipsum dolor sit amet consectetur.,<br/>Lorem, ipsum dolor.`
    }
  ])
  return (
    <div>
      <div>
        <h1 className='text-5xl text-center w-full font-bold'>How it works</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur.,<br/>Lorem, ipsum dolor.</p>
      </div>
      <div className='container flex justify-between'>
        <div className='left w=1/2 container'>
          <div className="cards">
            {cards.map((card,i)=>{
              <div className="card" key={i}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            })}
          </div>
        </div>
        <div className='right w=1/2'>
            <img src={Meet} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
