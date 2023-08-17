import React from 'react'

function Todo({todo}) {
    return (
        <>
            <h2>My Todos</h2>
            {todo.map((todo, index) =>{
                return <p key= {index}>{todo}</p>
            })}
        </>
    )
}

export default Todo
