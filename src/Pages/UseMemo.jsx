import { useState, useMemo } from "react";


export default function Memo() {
    const [grade, setGrade] = useState(55);

    const countPopulation = ((grade) => {
        return grade ** 2;
    });


    const memoizedVal = useMemo(() => countPopulation(grade), []);

    return (
        <div className="App">
            <p>Current Grade: {grade}</p>
            <p>Current Population: {memoizedVal}</p>

            <a href='https://github.com/Paresh09pat/InterviewReact/blob/main/src/Pages/UseMemo.jsx'> <button>Click Me To See Code !!</button></a>
        </div>

        
    );
}