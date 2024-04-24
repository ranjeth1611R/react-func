import React from 'react'
import { useState } from 'react'

export default function Interiew() {
    const [inputvalue, setinputvalue] =useState("")
    const [todo, settodo]= useState([])

    const handlein=(e)=>{
      setinputvalue(e.target.value)

    }

    const handleadd=()=>{
        settodo([...todo,inputvalue])
        setinputvalue("")
    }
  return (
    <div>
        <input type="text" value={inputvalue} onChange={handlein}/>
        <button onClick={handleadd}>Add</button>

        {todo.map((val) => (
            
                
                    <li>{val}
                    </li>  
))}
      
    </div>
  )
}
