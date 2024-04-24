import React,{Component, Suspense, lazy, useState} from "react";
import "./App.css"
import Todaypro from "./Component/FunComp/Todaypro";
import Birthday from "./Birthday";
import Apicall from "./Component/FunComp/Apicall";
import ReactHookform from "./Component/FunComp/ReactHookform";
import TodoList from "./Component/Common/TodoList";
import FormReact from "./Component/FunComp/FormReact";
import CountProvider from "./Component/FunComp/CountProvider";
import Headercomp from "./Component/FunComp/Headercomp";
import Productcomp from "./Component/FunComp/Productcomp";
import { BrowserRouter } from "react-router-dom";
import Mainroute from "./Component/React router/Mainroute";
import Basicpage from "./Component/Bootstrap/Basicpage";
import Secondpg from "./Component/Bootstrap/Secondpg";
import Thirdpg from "./Component/Bootstrap/Thirdpg";
import Counterredux from "./Component/ReduxComp/Counterredux";
import { Provider } from "react-redux";
import { store } from "./Component/redux/store";
import Itemli from "./Component/Swiggy/Itemli";
import Login from "./Component/Swiggy/Login";
import Func from "./Component/Bootstrap/Func";
import Frontpage from "./Component/project1/Frontpage";
import Suma from "./Component/project1/Suma";
import Interiew from "./Component/Bootstrap/Interiew";
// import Youtube from "./Component/Swiggy/Youtube";
import Parenttochild from "./Component/Swiggy/Parenttochild";


function App(){
    // const Data= lazy(()=> import("./Component/FunComp/Productcomp"))
    return(
        <div>
             
             {/* <Birthday />  */}
            {/* <Apicall/> */}
            {/* <Todaypro />  */}
            {/* <ReactHookform /> */}
            {/* <FormReact/> */}
            {/* <TodoList /> */}
            {/* <CountProvider>
            <Productcomp /> <Headercomp />
            </CountProvider> */}
            {/* <Suspense fallback={<span class="loader"></span>}>
            <Data />
            </Suspense> */}
            {/* <Headercomp/> */}
            {/* <Mainroute/> */}
            {/* <Basicpage/>  */}
            {/* <Secondpg/> */}
            {/* <Thirdpg/> */}
            {/* <Itemli/> */}
            {/* <Login/> */}
            {/* <Provider store={store}>
                 <Counterredux/>
            </Provider> */}
            {/* <Func/> */}
            {/* <Frontpage/> */}
            <Suma/>
            {/* <Interiew/> */}
            {/* <Youtube/> */}

            {/* <Parenttochild/> */}
        </div>
    )
}
export default App