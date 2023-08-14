import React, { useState } from 'react'

const Form = () => {
    const [fName, setFName] = useState('')
    const [result, setResult] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const resultText =`My First Name is ${fName}`
        setResult(resultText)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            value={fName}
            onChange={(event) => {
                setFName(event.target.value)
            }} />
            <h1>{result}</h1>
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
