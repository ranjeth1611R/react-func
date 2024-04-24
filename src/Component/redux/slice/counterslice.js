import { createSlice } from "@reduxjs/toolkit";

const counterslice= createSlice({

    name:"counter",
    
    initialState:{
        rice:1
    }, 

    reducers:{
        increment: (state)=>{
            state.rice +=1
        },
        decre: (state)=>{
            state.rice -=1
        }
    }

})
export default counterslice.reducer;
export const counteraction= counterslice.actions;
 