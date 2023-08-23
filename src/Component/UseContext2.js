import React from 'react'
import UseContext3 from './UseContext3.js'

function UseContext2({user}) {
    return (
        <>
            <h1>Component 2</h1>
            <UseContext3 user= {user} />
        </>
    )
}

export default UseContext2