import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import "./Todonew.css"
import { FaTrashAlt } from "react-icons/fa"

function TodoList() {
    const[input, setinput]= useState("")
    const[fun, setfun]= useState([])
    const[com, setcom]= useState(false)

    useEffect(()=>{
      handlegetdata()
    },[])

    const handlegetdata =async()=>{
      const response= await axios.get("http://localhost:3000/todoList")
      setfun(response.data)
      //console.log(response);
    }

    const handleadd=async()=>{

      if(input != ""){
      let body= { id:uuidv4(), task: input, completed: !com }
      await axios.post("http://localhost:3000/todoList", body)
      setinput("")
      handlegetdata()
    }else{
      alert("please enter valid message")
    }
    
    }

    const handledel=async(delbtn)=>{
      await axios.delete(`http://localhost:3000/todoList/${delbtn}`)
      handlegetdata() 
    }

    const handleedit= async(i)=>{
      const update=prompt("please enter update", fun[i].task)
      let data={
        id:fun[i].id, 
        task: update
      } 
      await axios.put(`http://localhost:3000/todoList/${fun[i].id}`,data)
      handlegetdata()
    ()
      }

    
  return (
    <div className='toofan'>
      <h1 className='topic'>TODO List</h1>
    <div className="STR">
      <div className='blueb'>
    <div className='todopg'>
      <div className='todomain'>
        <input type='text' placeholder='What would you like to do?' value={input} onChange={(e)=>setinput(e.target.value)} className='todoinput'/><br/>
        <button onClick={handleadd} className='todobtn' >Add</button>
      </div>
      <h5 className='mintitle'>Todo List</h5>
      <div className='minlist'>
        <h5 className='min1'>list</h5>
        {/* <h5 className='min2'>status</h5> */}
        <h5 className='min3'>edit</h5>
        <h5 className='min4'>close</h5>
        
      </div>
      {/* <div>{com? "completed": "pending"}</div> */}
        {fun.map((da,i)=>(
          <div key={i} className='mappg'>
            <div><h1 className='task'>{da.task}</h1></div>
            <div className='divi'>
            {/* <button onClick={()=>setcom(true)}className='check'>{com ? "Completed" : "pend"}</button>  */}
            <button  className='editbtn' onClick={()=>handleedit(i)}>Edit</button>
            <div onClick={()=>handledel(da.id)} className='deletebtn'><FaTrashAlt /></div>
           </div>
            </div>
        ))}
    </div>
    </div>
    </div>
    </div>
  )
}
export default TodoList
