import React from 'react'
import Meet from "../assets/video.jpg"

const Main = () => {
  return (
    <div>
      <div>
        <h1 className='text-5xl text-center w-full font-bold'>How it works</h1>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur.,<br/>Lorem, ipsum dolor.</p>
      </div>
      <div className='container flex justify-between'>
        <div className='left w=1/2'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo eum veniam, nobis quas tempore delectus ullam quod qui est laboriosam animi itaque aperiam ea sed sequi accusamus ipsum alias? Hic voluptatem cupiditate voluptatum quasi harum commodi, assumenda illo ad quibusdam sit nobis rem facilis saepe officiis, earum accusamus quia veritatis.
        </div>
        <div className='right w=1/2'>
            <img src={Meet} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
