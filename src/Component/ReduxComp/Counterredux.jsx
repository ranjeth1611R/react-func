import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counteraction } from '../redux/slice/counterslice'

export default function Counterredux() {
  const count= useSelector((store)=>store.counter.rice)
  const dispatch= useDispatch()

  const handleadd=()=>{
    dispatch(counteraction.increment())
  }

  const handledel=()=>{
    dispatch(counteraction.decre())
  }

  return (
    <div>
      counterredux
      <h1>{count}</h1>
      <button onClick={handleadd}>add</button>
      <button onClick={handledel}>del</button>
    </div>
  )
}
