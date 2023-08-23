import React from 'react'
import UseContext4 from './UseContext4.js'

function UseContext3({user}) {
    return (
        <>
            <h1>Component 3</h1>
            <UseContext4 user= {user} />
        </>
    )
}

export default UseContext3
