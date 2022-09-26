import { useState } from "react"

function HookUState() {

    const [name, setName] = useState('Paresh')

    const changeName = () => {
        setName("Umesh");
      };


    return (

        <>
            <p>My name is <span style={{backgroundColor:'tomato', padding:'5px', color:'white'}}>  {name}  </span>   </p>
            <button onClick={changeName}> Click me </button> <br/>
            <a href='https://www.w3schools.in/html/anchor'> <button>Click Me To See Code !!</button></a>
        </>
    )
}

export default HookUState;