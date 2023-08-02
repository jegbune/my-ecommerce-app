import React from 'react'
import { MenuItems } from './MenuList'
function Menu() {
    return (
       <div>
        {MenuItems.map((item,index) => {
            return(
                <p key={item.key}> My name is {item.name}, I am {item.age}</p>
            )
        })}
       </div> 
    )
}

export default Menu
