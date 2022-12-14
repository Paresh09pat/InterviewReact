import { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => calculation + 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Update</button>
      <p>Calculation : {calculation}</p>
    </>
  );
}


export default Timer
