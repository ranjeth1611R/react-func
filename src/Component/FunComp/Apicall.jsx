import React, { Component, useEffect, useState } from "react";
import CardComp from "../Common/CardComp";


 const Apicall=()=>{
    const[func,setfunc]= useState([])

    useEffect(()=>{
        handleadd()
    },[])

    const handleadd=async()=>{
        const response= await fetch("https://fakestoreapi.com/products")
        const data= await response.json()
        setfunc(data)
    }
    return(
        <div>
            <div className="container">
                <div className="row">
            {func.map((da,i)=>(
                <div key={i} className="col-4 mt-4">
                    <CardComp comp1={da.image} comp2={da.price}/>
                    {/* <img width="200px" height="200px" src={da.image} />
                    <h1>{da.title}</h1> */}
                </div>

            ))}
            </div>
            </div>
        </div>

    ) 
 }
 export default Apicall