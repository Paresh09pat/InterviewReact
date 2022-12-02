import React, { useState } from 'react'
import { useMemo } from 'react'

function Extra() {

const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])
const calculation = useMemo(()=>{expensive(count)}, [count])

const handleCount=()=>{
  setCount(count + 1)
}
const handleCount1=()=>{
  setCount(count - 1)
}
const handleTodo=()=>{
  setTodos((t)=>[...t, 'New Todo'])
}

  return (
  <>
{todos.map((todo, any)=>{
  return <p key={any} style={{backgroundColor:'violet'}}> {todo + any} </p>
})}
<button onClick={handleTodo}> Add Todo </button> <br/> <br/>


  Count : {count} <br/>
  <button onClick={handleCount}> Increanent </button>
  <button onClick={handleCount1}> Decreanent </button>

  {calculation}
  </>
  )
}

const expensive=(num)=>{
  console.log('paresh');
for(let i=0; i<100000000; i++)
num = num + 1
return num
}

export default Extra

// useMemo 

//The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.