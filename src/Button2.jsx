function Button2(){
    const handleClick = ()=> console.log('OUCH!');
    const handleClick1 = (e)=> e.target.textContent = 'ouch! 😅'
    const handleClick2 = (name)=> console.log(`${name} STOP CLICKING ME`);
    return(
        <button onDoubleClick={(e) => handleClick1(e)}>Click me 😊</button>
    )

}
export default Button2