import React from 'react'

const Navbar = () => {
    return (
      <>
      <div className="container w-full flex justify-between items-center px-20">
        <h2 className='font-bold text-xl px-6'>Skillhub</h2>
        <ul className='flex align-middle gap-5 '>
          <li>About Us</li>
          <li>Courses</li>
          <li>Resources</li>
          <li>Online Learning</li>
        </ul>
        
       
        <button className='rounded px-6 py-2 bg-green-300 text-white font-bold' >
          Log in
        </button>
        </div>
      </>
      );
}

export default Navbar





