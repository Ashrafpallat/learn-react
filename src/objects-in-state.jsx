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
        setCar({...car,model: event.target.value})
    }
    return (
        <div> 
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <p>Your favourite car is: {car.make} {car.year} {car.model} </p>
        </div>
    );
}
export default ObjectsInState