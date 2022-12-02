import { memo } from "react";

function Todos({todos, addTodo}) {
  return (
    <>
    <p>Todo List</p>

    {todos.map((todos, index)=>{
     return <p key={index}>{todos + index}</p>
    })}
<button onClick={addTodo}> Todo list</button>

    </>
  )
}

export default memo(Todos)