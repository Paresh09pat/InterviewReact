import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import Todos from './Todoes'


const NowThe=()=> {

const [count, setCount] = useState(0)
const [todos, setTodos] = useState([])

const handleChange=()=>{
    setCount(count+1)
}

const addTodo = useCallback(()=>setTodos((t)=>[...t, 'New Todo']), [todos])

  return (
    <div style={{textAlign:'center'}}>
    Count : {count} <br/>
    <button onClick={handleChange}> Increament </button>

<Todos todos={todos}  addTodo={addTodo}/>


    </div>
  )
}

export default NowThe