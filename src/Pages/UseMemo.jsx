// import { useState, useMemo } from "react";


// export default function Memo() {
//     const [grade, setGrade] = useState(55);

//     const countPopulation = ((grade) => {
//         return grade ** 2;
//     });


//     const memoizedVal = useMemo(() => countPopulation(grade), []);

//     return (
//         <div className="App">
//             <p>Current Grade: {grade}</p>
//             <p>Current Population: {memoizedVal}</p>

//             <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/UseMemo.jsx'> <button>Click Me To See Code !!</button></a>
//         </div>

        
//     );
// }









// import React, { useMemo, useState } from 'react';

// const App = () => {
//    const [val1, setVal1] = useState(0);
//    const [val2, setVal2] = useState(0);
   
//    const answer = useMemo(() => {
//       return add(val1, val2);
//    }, [val1, val2]);
//    return (
//       <div>
      
//          <input
//             placeholder="Value 1"
//             value={val1}
//             onChange={(e) => setVal1(e.target.value)}
//          />
//          <input
//             placeholder="Value 2"
//             value={val2}
//             onChange={(e) => setVal2(e.target.value)}
//          />
//          {answer}
//       </div>
//    );
// };

// const add = (num1, num2) => {
//    console.log('Adding numbers');
//    return parseInt(num1) + parseInt(num2);
// };
// export default App;





import React from "react";
import { useState,useMemo } from "react";

const add = (num1,num2)=>{
    console.log('Adding numbers');
    return parseInt(num1)+parseInt(num2)
}

const Any=()=>{

    const [val1, setVal1] = useState()
    const [val2, setVal2] = useState()

    const answer = useMemo(()=>{
        return add(val1,val2)
    },[val1,val2])
    return(
        <>
        {answer}

        <input onChange={(e)=>setVal1(e.target.value)}/>

        <input onChange={(e)=>setVal2(e.target.value)}/>
        
        </>
    )
}

export default Any;