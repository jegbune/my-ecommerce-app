import React, { useState } from 'react'

function Crud() {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [Age, setAge] = useState('')

    const handleFNameChange = (event) => {
        setFName(event.target.value)
    }
    const handleLNameChange = (event) => {
        setLName(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleAgeChange = (event) => {
        setAge(event.target.value)
    }

    const handleSubmit =(event) => {
    //    event.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your First name:
                <input
                type='text'
                name = 'FirstName'
                value={fName}
                onChange={handleFNameChange} 
                />
            </label>
            
            <label>Enter your Last name:
                <input
                type='text'
                name = 'LastName'
                value={lName}
                onChange={handleLNameChange} 
                />
            </label>
            <label>Enter your Email:
                <input
                type='text'
                name = 'Email'
                value={Email}
                onChange={handleEmailChange} 
                />
            </label>
            <label>Enter your Age:
                <input
                type='number'
                name = 'Age'
                value={Age}
                onChange={handleAgeChange} 
                />
            </label>
            <div>
                <p>{fName}</p>
                <p>{lName}</p>
                <p>{Email}</p>
                <p>{Age}</p>
            </div>
            
        </form>
    )
}

export default Crud
