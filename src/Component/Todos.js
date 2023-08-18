import React, { useState } from 'react'
import Todo from './Todo';

function Todos() {
    const [count, setCount] = useState(0);
    const [todo, setTodo] = useState(['todo 1', 'todo2'])

    const increment = () => {
        setCount((c) => c + 1);
    }

    return (
        <>
        <Todo todo={todo} />
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>

        </>
    )
}

export default Todos
