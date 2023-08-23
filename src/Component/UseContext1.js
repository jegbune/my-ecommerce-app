import React, { useState } from "react";
import UseContext2 from './UseContext2.js'

function UseContext1() {
    const [user, setUser] = useState ('Jeremiah Egbune')
    return(
        <>
            <h1>{`Hello ${user}`}</h1>
            <UseContext2 user={user} />
        </>
    )
}

export default UseContext1