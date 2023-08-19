import React, { useState } from 'react'


function State() {
    const [color, setColor] = useState('Red')

    return (
        <>
        <h2>My Favourite color is {color}</h2>
        <button
        type='button'
        onClick={() => {setColor('Blue')}}>
            Blue
        </button>
        <button
        type='button'
        onClick={() => {setColor('Black')}}>
            Black
        </button>
        <button
        type='button'
        onClick={() => {setColor('Yellow')}}>
            Yellow
        </button>
        <button
        type='button'
        onClick={() => {setColor('White')}}>
            White
        </button>
        </>
    )
}

export default State
