import React, {useState}from 'react'
import Childtopar from './Childtopar'

export default function Parenttochild() {
    const[name, setname]= useState("Arun")
  return (
    <div>
        <h1>{name}</h1>
        <Childtopar setname={setname}/>
    </div>
  )
}
