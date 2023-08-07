import React from 'react'

function Menu() {
    const access = false
    return (
        <>
        <h1>This is the expression of the code</h1>
        {access && <h2>This is the expression</h2>}
        </>
    )
}

export default Menu
