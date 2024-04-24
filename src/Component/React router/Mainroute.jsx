import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Headerroute from './Headerroute'
import Productroute from './Productroute'
import Contactroute from './Contactroute'

function Mainroute() {
  return (
    <div>
        <BrowserRouter>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/contactus"}>Contactus</Link></li>
            </ul>
        </nav>
        <Routes>
           <Route path='/' element={<Headerroute/>}/>
           <Route path='/product' element={<Productroute/>}/>
           <Route path='/contactus' element={<Contactroute/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default Mainroute
