import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slice/counterslice";

export const store= configureStore({
    reducer:{
        counter: counterslice
    }
})