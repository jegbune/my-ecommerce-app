import React, { useState } from 'react'

function Crud() {

    const [input, setInput] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput( values => ({...values,[name]:value}))
    }
    // const [fName, setFName] = useState('')
    // const [lName, setLName] = useState('')
    // const [Email, setEmail] = useState('')
    // const [DOB, setDOB] = useState('')
    // const [Age, setAge] = useState('')

    // const handleFNameChange = (event) => {
    //     setFName(event.target.value)
    // }
    // const handleLNameChange = (event) => {
    //     setLName(event.target.value)
    // }
    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value)
    // }
    // const handleAgeChange = (event) => {
    //     setAge(event.target.value)
    // }

    // const handleDOBChange = (event) => {
    //     setDOB(event.target.value)
    // }

    const handleSubmit =(event) => {
       event.preventDefault();
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your First name:
                <input
                type='text'
                name = 'FirstName'
                value={input.FirstName || ''}
                onChange={handleChange} 
                />
            </label>
            
            <label>Enter your Last name:
                <input
                type='text'
                name = 'LastName'
                value={input.LastName || ''}
                onChange={handleChange} 
                />
            </label>
            <label>Enter your Email:
                <input
                type='text'
                name = 'Email'
                value={input.Email || ''}
                onChange={handleChange} 
                />
            </label>
            <label>Enter your Age:
                <input
                type='number'
                name = 'Age'
                value={input.Age || ''}
                onChange={handleChange} 
                />
            </label>
            <label>Enter your Date of Birth:
                <input
                type='Date'
                name = 'DOB'
                value={input.DOB || ''}
                onChange={handleChange} 
                />
            </label>
            <div>
                <p>Your First Name: {input.FirstName || ''}</p>
                <p>Your Last Name: {input.LastName || ''}</p>
                <p>Your Email: {input.Email || ''}</p>
                <p>Your Age{input.Age || ''}</p>
                <p>Your Date of birth: {input.DOB || ''}</p>
            </div>
            <input type='submit' />

        </form>
    )
}

export default Crud
