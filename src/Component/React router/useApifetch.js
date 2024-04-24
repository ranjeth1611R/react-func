import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form'

function useApifetch(url) {
    const[add, setadd]= useState([])
    const[load, setload]= useState(false)
    useEffect(()=>{
        callapi()
    },[])
    const callapi=async()=>{
        setload(true)
        const func= await axios.get(url)
        setadd(func.data)
        setload(false)

    }
  return ({add,load})
}
export default useApifetch