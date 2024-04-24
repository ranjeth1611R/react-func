import React from "react";
import { useForm } from "react-hook-form";

function ReactHookform(){
    const{
        register,handleSubmit,watch,
        formState: { errors }
    }= useForm()

    const handle=(data)=>{
        console.log(data);

    }
    console.log(errors)
     
    return(
        <div>
            <form>
            <p>{errors?.firstname?.message}</p>
            <input type="text" placeholder="Enter Your Name" {...register("firstname", {required: "u r invalid"})}/>
            <br/>
            <p>{errors?.email?.message}</p>
            <p>{}</p>
            <input type="text" placeholder="Enter Your Email"{...register("email", {required: "u r invalid", 
            
            pattern:{ value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}
})}/>
            <br/>
            <input type="text" placeholder="Enter Your Age"{...register("ouage")}/>
            <br/>
            <button onClick={handleSubmit(handle)}>Submit</button>
            </form>
 
        </div>
    )
}
export default ReactHookform