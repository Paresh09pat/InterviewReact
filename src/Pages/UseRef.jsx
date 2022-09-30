import React, { useRef } from 'react';

function UseReferance() {

    // Creating a ref object using useRef hook
    const focusPoint = useRef(null);
    const onClickHandler = () => {
        focusPoint.current.value =
            "Hello UseRef";
           focusPoint.current.focus();
    };
    return (
        <div style={{
            margin: '10px',
            width: '20%',
            marginLeft: '20%',
            textAlign: 'center',
            padding: '10px',
            backgroundColor: 'aquamarine',
            color: 'red'
          }}>
            <input ref={focusPoint} />  <br />

            <button onClick={onClickHandler}>  ACTION   </button> <br />

            <label>
                Click on the action button to focus and populate the text.
            </label> <br/>
            <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/UseRef.jsx'> <button>Click Me To See Code !!</button></a>
        </div>
    );
};

export default UseReferance;