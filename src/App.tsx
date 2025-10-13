import React from 'react'
import Navbar from './componets/Navbar'
import Hero from './componets/hero' 

const App = () => {
  return (
   <div className="min-h-screen bg-black text-white">
    <Navbar/>
    <Hero/>
   </div>
  )
}

export default App