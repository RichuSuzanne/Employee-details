import { useState } from 'react'
import './App.css'
import Navibar from './Navibar'

import ViewStudent from './ViewStudent'
import AddStudent from './AddStudent'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navibar/>
     <Routes>
      <Route path='/b' element={<AddStudent/>}/>
      <Route path='/a' element={<ViewStudent/>} />
     </Routes>
    </>
  )
}

export default App
