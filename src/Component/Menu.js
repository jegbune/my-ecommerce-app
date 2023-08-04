import React from 'react'

function Menu(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;
    
    return [add, subtract, multiply, divide](
        
        )
    }
    const [add, subtract, multiply, divide] = Menu(4, 7);
    <p>Sum: {add} </p> 
  
  

export default Menu

