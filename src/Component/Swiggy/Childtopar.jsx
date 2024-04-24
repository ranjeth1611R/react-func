import React from 'react'

export default function Childtopar({setname}) {  

    const handchange = (e)=>{
        setname(e.target.value)
//console.log(e.target.value);
    }
  return (
    <div>
      

      <input onChange={handchange}/>
    </div>
  )
}
