import React, { useState } from 'react'

function Form() {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault() 
        alert(text)
    }

    return (
       <form onSubmit={handleSubmit}>
        <label>
            <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        </label>
        <input type='submit' />
       </form> 
    )
}

export default Form
