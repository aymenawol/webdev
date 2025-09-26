import React, {useState} from 'react'

function Updater(){

   const [count,setCount] = useState(0);

    function incrementTwice(){
        setCount(prev=>prev+1)
        setCount(prev=>prev+1)
    }
    function decrementTwice(){
        setCount(prev=>prev-1)
        setCount(prev=>prev-1)
    }
    function reset(){
        setCount(()=>count+1)
    }

    return(
        <>
       <button onClick={incrementTwice}>inc</button>
       <button onClick={decrementTwice}>dec</button>
       <button onClick={reset}>reset</button>
       <p>count: {count}</p>
        </>
    )
}

export default Updater