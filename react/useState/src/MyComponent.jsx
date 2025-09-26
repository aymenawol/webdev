import React, { useState } from "react"

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(25)
    const [isEmployed,setIsEmployed] = useState()
    const updateName = ()=>{
        setName("Spongebob")
    }
    const incrementAge = ()=>{
        setAge(age+1)
    }
    const checkEmployment = ()=>{
        setIsEmployed(!isEmployed)
    }

    return (<div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Employed: {isEmployed ? "Yes":"No"}</p>
        <button onClick={updateName}>Set name</button>
        <button onClick={incrementAge}>+</button>
        <input type="checkbox" onClick={checkEmployment}/>Employed?
        
    </div>)
}

export default MyComponent