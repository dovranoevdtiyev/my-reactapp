import React from "react"
import { useState } from "react"
import './assets/index.css'


const Counter=()=>{
    const [value,setValue]=useState(0);
    const reset=()=>{
        setValue(0);
    };
    const decrease=()=>{
        if (value>=0){
           setValue(value-1)
        }
        else{
            setValue(0);
        };
    }


    return(
        <>
        <section>
            <h2>Counter</h2>
            <h1>{value}</h1>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>reset</button>
            <button onClick={()=>setValue(value+1)}>increase</button>
        </section>
        </>

    )

}


export default Counter