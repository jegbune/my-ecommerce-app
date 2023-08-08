import React, {useState} from 'react'

function Menu() {
    const [colour, setColour] = useState('red');
    return (
        <>
            <h1>My favourite color is {colour}</h1>
            <button
            type='button'
            onClick={() => {setColour('Blue')
            }}
            >Blue
            </button>
            
            <button
            type='button'
            onClick={() => {setColour('Yellow')
            }}
            >Yellow
            </button>

            <button
            type='button'
            onClick={() => {setColour('Green')
            }}
            >Green
            </button>

            <button
            type='button'
            onClick={() => {setColour('white')
            }}
            >white
            </button>

            <button
            type='button'
            onClick={() => {setColour('Orange')
            }}
            >Orange
            </button>

        </>
    )
}

export default Menu
