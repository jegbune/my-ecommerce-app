import React, { useState } from 'react'

const Form = () => {
    const [input, setInput] = useState('')
    const [final, setFinal] = useState('')
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const resultText =`My First Name is ${input.name}, I am ${input.age} years old`
        setFinal(resultText)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your First Name<br />
            <input
            type='text'
            name='name'
            value={input.name || ''}
            onChange={handleChange}
            />
            </label><br />
            <label>Enter your Age <br/>
            <input
            type='number'
            name='age'
            value={input.age || ''}
            onChange={handleChange}
            />
            </label>
            <input 
            type='submit'
            />
            
            <h1>{final}</h1>
        </form>
    )
}













// function Form() {
//     const [input, setInput] = useState('')
//     const [name, setName] = useState('')
//     const [text, setText] = useState('')

//     const handleSubmit = (event) => {
//         event.preventDefault() 
//         alert(text)
//     }
    
//     const handleChange = (event) =>{
//        setName(event.target.name)
//     }
    
//     const handleName = (event) =>{
//        setText(event.target.value)
//     }
    
//     return (
//        <form onSubmit={handleSubmit}>
//         <label>
//             Enter your name: 
//             <input 
//             type='text'
//             value={name}
//             onChange={handleName}
//             />
//         </label>
//         <label>
//             Comment:
//             <textarea
//             type= 'text'
//             value={input.text}
//             onChange={handleChange}
//             />
//         </label>
//         <input type='submit' />
//        </form> 
//     )
// }

export default Form
