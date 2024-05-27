import React from 'react'
import student from "../assets/Student.jpg"

const ImgSec = () => {
  return (
    <div>
      <div className="container flex justify-between gap-10 ">
      <div className="left w-1/2 "> 
        <img src={student} alt="image" />
       </div>
        <div className="right w-1/2  pt-10 mt-10 ml-10">
          <h2 className='text-green-300 text-[2rem]'>Grow Yourself with us</h2>
          <h1 className="text-[3rem] mt-[0.08rem] leading-none font-bold">Grow your skill &</h1>
          <h1 className="text-[3rem] mt-[0.08rem] leading-none font-bold">get world class</h1>
          <h1 className="text-[3rem] mt-[0.08rem] leading-none font-bold">job's</h1>

          <p className='mt-9 py-5 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos atque repudiandae, fugit quidem minus commodi, error veniam exercitationem totam recusandae? Harum alias magnam aliquam ea itaque neque sunt assumenda, maiores cupiditate ipsam nemo eum, impedit pariatur repellendus ullam officia.</p>

          <div className='mt-9 border rounded-full bg-zinc-50 w-[75%] flex justify-between align-middle'>
            <input type="text" className='bg-transparent w-4/5 outline-none border-none px-6' placeholder='Search course title' />
            <button className='rounded-full px-5 py-2 bg-green-400 text-white font-bold'>
              Search
            </button>
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default ImgSec
