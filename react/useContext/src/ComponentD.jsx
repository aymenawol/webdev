import React, { useContext } from 'react'
import {UserContext} from './ComponentA'
function ComponentD() {

    
    return (
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${props.user}`}</h2>
        </div>
    )
}

export default ComponentD