import React, { Suspense, lazy, useContext, useEffect } from "react";
import CounterContext from "../Context/CounterContext";
import { useRef } from "react";
import "./Headercomp.css"
import Productcomp from "./Productcomp";
import Apicall from "./Apicall";
import CardComp from "../Common/CardComp";

function Headercomp(){
    // const{count}= useContext(CounterContext)
    // return(
    //     <div>
    //         <h1>Card:{count}</h1>

    //     </div>
    // )
    // const inputref= useRef(null)
    // useEffect(()=>
    // inputref.current.focus()
    // )
    // return(
    //     <div>
    //         <input ref={inputref} type="text" placeholder="pls enter data"/>
    //     </div>
    // )
//     const ranjeth= useRef()
//     useEffect(()=>{
//     ranjeth.current.focus()
// },[])
//     return(
//         <div>
//             <input ref={ranjeth} type="text" placeholder="enter u r data"/>
//         </div>
//     )
const Fun= lazy(()=>import("./Productcomp"))
return(
    <div>
        <Suspense fallback={<span class="loader"></span>}>
            <Fun/>
        </Suspense>
    </div>
)
     }
export default Headercomp 