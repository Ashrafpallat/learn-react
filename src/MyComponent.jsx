import React, {useState} from "react"
function MyComponet(){
    const [name, setName] = useState('Guest');
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const udpateName = ()=> {
        setName('Ashraf P')  
    }
    const incrementAge = () => {
        setAge(age+1)
    }
    const toggleIsEmployed = () => {
        setIsEmployed(!isEmployed)
    }
    
    return(
        <div>
            <p>Name: {name} </p>
            <button onClick={udpateName}>Set Name</button>
            <p>Age: {age} </p>
            <button onClick={incrementAge}>Set Age</button>
            <p>is Employed: {isEmployed ? 'Yes' : 'No'} </p>
            <button onClick={toggleIsEmployed}>Toggle Status</button>
        </div>
    );
    
}
export default MyComponet