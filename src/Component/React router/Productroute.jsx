import React from "react";
import useApifetch from "./useApifetch";

function Productroute(){
    let {add}= useApifetch("https://jsonplaceholder.typicode.com/todos")
    console.log(add)
    return(
        <div>
            ProductRoute
        </div>
    )
}
export default Productroute