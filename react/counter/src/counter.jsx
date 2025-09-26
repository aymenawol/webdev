import React, { useState } from "react"

function Counter() {

    const [num,setNum] = useState(0)

    const dec = ()=>{
        setNum(num-1)
    }
    const reset = ()=>{
        setNum(0)
    }
    const inc = ()=>{
        setNum(num+1)
    }

    return(
    <>
    <div className="container">
        <p>{num}</p>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={inc}>Increment</button>
    </div>
    </>

)
}



export default Counter