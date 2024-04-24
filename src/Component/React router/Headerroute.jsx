import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useApifetch from './useApifetch'
import Loader from './Loader'

function Headerroute(url) {
    const {add,load}= useApifetch("https://fakestoreapi.com/products")
    console.log(add)
    return(
        <div>
            <h1>Headerroute</h1>
            {load?<Loader/>:
            <div>
            {add.map((da,i)=>(
                <div key={i}>
                <h5>{da.title}</h5>
                </div>
            ))}
            </div>
}

        </div>
    )
   
}
export default Headerroute