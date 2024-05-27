import React from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import TutoringCards from './components/TutoringCards'
import Main from './components/Main'
const App = () => {
  return (
    <div>
      <Navbar />
      <Body/>
      <Main/>
      <TutoringCards/>
    </div>
  )
}

export default App
