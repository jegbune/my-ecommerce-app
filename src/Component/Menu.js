import React from 'react'

function Menu() {
    const shoot = () => {
        alert('this is an alert')
    }
    return (
        <button onClick={shoot}>Give it a shoot</button>
    )
}

export default Menu
