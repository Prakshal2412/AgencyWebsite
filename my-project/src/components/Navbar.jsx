import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  const toggleMwnu=()=>{
    setisMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    const handleScroll=()=>{
      if(Window.scrollY>100){
        setisSticky(true);
      }
      else{
        setisSticky(false);
      }
    };
    window.addEventListener('scroll',handleScroll);
    return()=>{
      window.addEventListener('scroll',handleScroll);
    }

  });
  //navItems array
  const navItems=[
    {link:"Home",path:"home"},
    {link:"Courses",path:"courses"},
    {link:"Resources",path:"resources"},
    {link:"Online Learning",path:"onlinelearning"},
  ]
    return (
      <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
      <img src="../src/assets/AgencyLogo.png" alt=""  className='h-20 w-20'/>
      <span class="ml-0 text-xl">SKILLHUB</span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">Home</a>
      <a class="mr-5 hover:text-gray-900">Courses</a>
      <a class="mr-5 hover:text-gray-900">Resources</a>
      <a class="mr-5 hover:text-gray-900">Online Learning</a>
      <a class="mr-5 hover:text-gray-900">Contact us</a>
    </nav>
    <div className='gap-5 flex '>
    <button class="bg-green-200 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogIN
    </button>
    <button class="bg-green-200 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Up
    </button>
    </div>
  </div>
</header>
      );
}

export default Navbar





