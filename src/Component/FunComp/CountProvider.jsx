import React from "react";
import { useState } from "react";
import CounterContext from "../Context/CounterContext";

function CountProvider({children}){
    const [count, setcount]= useState(0)
    const increment=()=>{
        setcount(count+1)
    }
    return(
        <div>
            <CounterContext.Provider value={{count, increment}}>
                {children}
            </CounterContext.Provider>
        </div>

    )
}
export default CountProvider