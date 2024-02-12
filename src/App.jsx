import React,{Component, useState} from "react";

import Todaypro from "./Component/FunComp/Todaypro";
import Birthday from "./Birthday";
import Apicall from "./Component/FunComp/Apicall";

function App(){
    return(
        <div>
             
             {/* <Birthday />  */}
            <Apicall/>
            {/* <Todaypro />  */}
        </div>
    )
}
export default App