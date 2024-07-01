function Students(props){
    return(
        <div className="student">
            <p>Nmae: {props.name} </p>
            <p>Age: {props.age} </p>
            <p>Student: {props.isStudent?"Yes" : "No"}</p>
        </div>
    );
}
export default Students