import React from 'react'

function Menu() {
    const shoot = (a) => {
        alert(a)
    }
    return (
        <button onClick={() => {shoot('Goal!')}}>Give it a shoot</button>
    )
}

export default Menu
