import React, {useState} from "react";

function ObjectsInState(){
    const [car,setCar] = useState({
        year:2023,
        make:'Ford',
        model:'Mustang'
    });
    function handleYearChange(event){
        setCar(c=>({...c, year: event.target.value}))
    }
    function handleMakeChange(event){
        setCar({...car, make: event.target.value})
    }
    function handleModelChange(event){
        setCar({})
    }
    return (
        <div> 
            <p>Your favourite car is: {car.make} {car.year} {car.model} </p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
        </div>
    );
}
export default ObjectsInState