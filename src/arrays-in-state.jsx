import React, {useState} from "react";

function ArraysInState(){
    const [foods, setFoods] = useState(['Apple','Orange','Banana']);

    function handleAddFood(){
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = '';
        setFoods([...foods, newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i)=> i!==index)) 
        // ('_' means that that parameter (element in this case) will be ingnored)

    }

    return(
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food,index)=> 
                <li key={index} onClick={()=> handleRemoveFood(index)}>
                    {food}
                    </li> )}
            </ul>
            <input type="text" id="foodInput"  placeholder="Enter food"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}
export default ArraysInState