import React, { useState, useEffect } from 'react'

function MyComponent() {

    // const [count,setCount] = useState(0);
    // const [color,setColor] = useState("green")
    // useEffect(()=>{
    //     document.title = `Count: ${count} ${color}`;

    // },[count,color])
    // function addCount(){
    //     setCount(count=>count+1)
    // }
    // function subtractCount(){
    //     setCount(count=>count-1)
    // }
    // function changeColor(){
    //     setColor(color=> color==="green"? "red":"green")
    // }

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("Event Listener Added")
        return()=>{
            window.removeEventListener("resize",handleResize)
        }
    })


    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    return (
        // <>
        //     <p style={{color:color}}>Count: {count}</p>
        //     <button onClick={addCount}>Add</button>
        //     <button onClick={subtractCount}>Subtract</button>
        //     <button onClick={changeColor}>Change Color</button>
        // </>
        <>
            <p>Window Width: {width}</p>
            <p>Window Height: {height}</p>
        </>
    )
}

export default MyComponent