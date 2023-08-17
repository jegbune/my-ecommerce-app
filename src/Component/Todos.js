import React, { useState } from 'react'
import Todo from './Todo';

function Todos() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(['todo 1', 'todo2'])

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
        <Todo todos={todo}
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>

        </>
    )
}

export default Todos
