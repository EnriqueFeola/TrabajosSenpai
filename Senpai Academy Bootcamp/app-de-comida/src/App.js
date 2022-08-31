import { useState } from 'react'
import {RoutesApp} from './RoutesApp' 
import {NavBar} from './components/NavBar'
function App () {
  return (
    <>
    <html className='h-full'></html>
    <div className='App h-full bg-[#080f28] '>
      
      <NavBar />
      <RoutesApp className="h-full"   />
    </div>
    </>
  )
}

export default App;
