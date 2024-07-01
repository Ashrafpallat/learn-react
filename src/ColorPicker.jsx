import React, {useState} from "react"

function ColorPicker(){
    const [color, setColor] =useState("#fff")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div className="color-picker-container">
            <h1 style={{color:color}}>Color Picker</h1>
            <div >
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color-picker">Pick Colour🎨 </label>
            <input id="color-picker" type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default ColorPicker