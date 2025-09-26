import React, { useState } from 'react'

function ObjectArrays() {


    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("")

    function addCar() {
        const newCar = {year:carYear,
                        make:carMake,
                        model:carModel}
        setCars(cars=>[...cars,newCar])
        setCarYear("")
        setCarMake("")
        setCarModel("")
    }

    function removeCar(index) {
        setCars(cars=>cars.filter((_,i)=>i!==index))
    }

    function changeYear(event) {
        setCarYear(event.target.value)
    }

    function changeMake(event) {
        setCarMake(event.target.value)
    }

    function changeModel(event) {
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car,index)=>
                <li onClick={()=>removeCar(index)} key={index}>{car.year} {car.make} {car.model}</li>)}
            </ul>
            <input placeholder="Enter car year" type="number" value={carYear} onChange={changeYear} /><br />
            <input placeholder="Enter car make" type="text" value={carMake} onChange={changeMake} /><br />
            <input placeholder="Enter car model" type="text" value={carModel} onChange={changeModel} /><br />
            <button onClick={addCar}>Add Car</button>
            
        </div>
    )
}

export default ObjectArrays