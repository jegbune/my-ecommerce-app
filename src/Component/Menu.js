import { MenuItems } from './MenuList'
import React from 'react'

function Menu() {
    const details = MenuItems.map((item) => {
            <p>My name is {item.name}, I am {item.age}</p>
    })
    return (
        {
          details  
        }
    )
}

export default Menu
