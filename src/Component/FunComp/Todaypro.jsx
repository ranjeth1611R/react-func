import React, { useState } from "react";

function Todaypro(){
    const[input,setinput]= useState("")
    const[add,setadd]= useState([])

    const handleadd=(e)=>{
        setinput(e.target.value)

    }
    const handleadd1=()=>{
        setadd([...add, input])
    }

    return(
        <div>
            <h1>Grocery bud</h1>
            <input onChange={handleadd}/>
            <button onClick={handleadd1}>add</button>

            {add.map((da,i)=>(
                <div key={i}>
                    <h1>{da}</h1>

                </div>
            ))}
        </div>
    )
}
export default Todaypro