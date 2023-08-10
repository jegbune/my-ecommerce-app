import React, { useState } from 'react';

function MultiInputForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={handleFirstNameChange}
        placeholder="First Name"
      />
      <input
        type="text"
        value={lastName}
        onChange={handleLastNameChange}
        placeholder="Last Name"
      />
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
      />
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default MultiInputForm;






// import React, { useState } from 'react'

// function Crud() {

//     const [fName, setFName] = useState('')
//     const [lName, setLName] = useState('')
//     const [Email, setEmail] = useState('')
//     const [Age, setAge] = useState('')

//     const handleFNameChange = (event) => {
//         setFName(event.target.value)
//     }
//     const handleLNameChange = (event) => {
//         setLName(event.target.value)
//     }
//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }
//     const handleAgeChange = (event) => {
//         setAge(event.target.value)
//     }

//     const handleSubmit =(event) => {
//     //    event.preventDefault();
        
//     }

//     return (
//         <form onSubmit={handleSubmit()}>
//             <label>Enter your First name:
//                 <input
//                 type='text'
//                 name = 'FirstName'
//                 value={fName}
//                 onChange={handleFNameChange} 
//                 />
//             </label>
            
//             <label>Enter your Last name:
//                 <input
//                 type='text'
//                 name = 'LastName'
//                 value={lName}
//                 onChange={handleLNameChange} 
//                 />
//             </label>
//             <label>Enter your Email:
//                 <input
//                 type='text'
//                 name = 'Email'
//                 value={Email}
//                 onChange={handleEmailChange} 
//                 />
//             </label>
//             <label>Enter your Age:
//                 <input
//                 type='number'
//                 name = 'Age'
//                 value={Age}
//                 onChange={handleAgeChange} 
//                 />
//             </label>
//             <div>
//                 <p>{fName}</p>
//                 <p>{lName}</p>
//                 <p>{Email}</p>
//                 <p>{Age}</p>
//             </div>
            
//         </form>
//     )
// }

// export default Crud
