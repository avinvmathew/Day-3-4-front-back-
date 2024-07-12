import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Records from './components/Records'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Records/>}/>
        <Route path='/add' element={<Add movie={{mname:'Movie 1',cname:'Sci fi',dname:'',ryr:''}}/>}></Route>
        {/* <Route path='/add' element={<Add/>}/> */}
      </Routes>
      <video autoPlay loop muted id='video'>
        <source src='https://cdn.pixabay.com/video/2017/06/05/9584-220312371_large.mp4'/>
      </video>
    </>
  )
}

export default App
