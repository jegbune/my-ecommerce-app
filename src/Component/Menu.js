import React from 'react'

function Menu() {
    const shoot = (a, b) => {
        alert(b.type +' '+ a)
    }
    return (
        <button onClick={(event) => {shoot('Goal!', event)}}>Give it a shoot</button>
    )
}

export default Menu
