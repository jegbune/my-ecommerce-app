import React from 'react'

function Menu() {
    function calculate(a,b) {
        const add = a+b;
        const subtract = a-b;
        const multiply = a*b;
        const divide = a/b;
    return [add, subtract, multiply, divide];
}
const [add,subtract,multiply,divide] = calculate(1000000000,1000000000)
    return (
        <div>
            <p> add : {add}</p>
            <p> subtract : {subtract}</p>
            <p> multiply : {multiply}</p>
            <p> divide : {divide}</p>
            
        </div>
    )
}
export default Menu

