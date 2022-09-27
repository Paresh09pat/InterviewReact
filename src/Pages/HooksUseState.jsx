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
            <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/HooksUseState.jsx'> <button>Click Me To See Code !!</button></a>
        </>
    )
}

export default HookUState;