import React, {useState} from 'react'

function ObjectUpdater(){

   const [car,setCar] = useState({
    year: 2024,
    make: "Ford",
    model:"Mustang",
   })
   
   const handleYearChange = (event)=>setCar({...car,year:event.target.value})
   const handleMakeChange = (event)=>setCar({...car,make:event.target.value})
   const handleModelChange = (event)=>setCar({...car,model:event.target.value})

    return(
        <>
       <div>
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
       </div>
       <input type="number" value={car.year} onChange={handleYearChange}/>
       <input type="text" value={car.make} onChange={handleMakeChange}/>
       <input type="text" value={car.model} onChange={handleModelChange}/>
        </>
    )
}

export default ObjectUpdater