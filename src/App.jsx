import { useState } from 'react'
import Home from './components/Home'
import DataProvider from './context/DataProvider';
import Start from './components/Start';
import Contact from './components/Contact';



function App() {
  

  return (
    
   <DataProvider>
   <Start/>
   <Home/>
   <Contact/>
   </DataProvider>
  )
}

export default App
