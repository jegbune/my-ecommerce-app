import React from 'react'
import UseContext5 from './UseContext5.js'

function UseContext4({user}) {
    return (
        <>
            <h1>Component 4</h1>
            <UseContext5 user= {user} />
        </>
    )
}

export default UseContext4