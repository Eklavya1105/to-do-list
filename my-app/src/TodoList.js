import React from "react";
export default function TodoList({todos,deleteTodo,toggleComplete}){
    return(
        <ul>
            {todos.map((todo)=>(
                <li key ={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={()=>toggleComplete(todo.id)}/>
                    <span style={{textDecoration:todo.completed?'line-through':'none'}}>{todo.text}</span>
                    <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};