import React, { useEffect,useState } from 'react'

const Navbar = () => {

        

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
          <header className="w-full py-4 px-8 bg-white shadow-md flex justify-between items-center">
            <div className="text-2xl font-bold">Your Logo</div>
            <nav className="space-x-6">
              <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Sign Up</button>
            </nav>
          </header>
          <main className="flex flex-col items-center mt-16 px-4">
            <h1 className="text-5xl font-bold text-gray-800">
              Design <span className="text-blue-600">Landing Page</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-md">Get Started</button>
            <div className="mt-16">
              <img src="path/to/your/image.png" alt="Design illustration" />
            </div>
          </main>
        </div>
      );
}

export default Navbar





