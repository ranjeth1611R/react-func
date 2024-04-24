import axios from "axios";
import React, { useEffect, useState } from "react";
import {v4 as uuidv4} from 'uuid'

function FormReact(){
    const[text, settext]= useState("")
    const[fun, setfun]= useState([])

    useEffect(()=>{
        handleget()
    },[])

    const handleget=async()=>{
        const getda= await axios.get("http://localhost:3000/todoList")
        setfun(getda.data)
        //console.log(getda.data)
    }

    const handleadd= async()=>{
        let inputadd ={id: uuidv4(),task: text}
        await axios.post("http://localhost:3000/todoList", inputadd)
        handleget()
    }
    const delfun=async(id)=>{
        await axios.delete(`http://localhost:3000/todoList${id}`)
      }
    
    return(
        <div>
            <input type="text" placeholder="enter the task" onChange={e=>settext(e.target.value)} />
            <button onClick={handleadd}>Add</button>
          {fun.map((da,i)=>(
            <div key={i}>
                <h1>{i+1}.{da.task}</h1>
                {/* <button onClick={()=>handleedit(i)}>edit</button> */}
                <button onClick={()=>delfun(da.id)}>delete</button>
                </div>
          ))}
        </div>
    )
}
export default FormReact