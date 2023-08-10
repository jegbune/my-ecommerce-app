import React, { useState } from 'react'

function Crud() {

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [Email, setEmail] = useState('')
    const [DOB, setDOB] = useState('')
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

    const handleDOBChange = (event) => {
        setDOB(event.target.value)
    }

    const handleSubmit =(event) => {
    //    event.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit()}>
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
            <label>Enter your Date of Birth:
                <input
                type='Date'
                name = 'DOB'
                value={DOB}
                onChange={handleDOBChange} 
                />
            </label>
            <div>
                <p>Your First Name: {fName}</p>
                <p>Your Last Name: {lName}</p>
                <p>Your Email: {Email}</p>
                <p>Your Age{Age}</p>
                <p>Your Date of birth:{DOB}</p>
            </div>
            
        </form>
    )
}

export default Crud
