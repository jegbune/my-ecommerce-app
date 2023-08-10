import React, { useState } from 'react'

function Form() {
    const [name, setName] = useState('')
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault() 
        alert(text)
    }
    
    const handleChange = (event) =>{
       setName(event.target.name)
    }
    
    const handleName = (event) =>{
       setText(event.target.value)
    }
    
    return (
       <form onSubmit={handleSubmit}>
        <label>
            Enter your name: 
            <input 
            type='text'
            value={name}
            onChange={handleName}
            />
        </label>
        <label>
            Comment:
            <textarea
            value={text}
            onChange={handleChange}
            />
        </label>
        <input type='submit' />
       </form> 
    )
}

export default Form
