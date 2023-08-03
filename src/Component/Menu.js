import React from 'react'

function Menu() {
    function calculate(a,b) {
        const add = a+b;
        const subtract = a-b;
        const multiply = a*b;
        const divide = a/b;
    return [add, subtract, multiply, divide];
}
    return (
        <div>
            {calculate(10,5)}
            <p> add :</p>
            {alert(add)}
        </div>
    )
}
export default Menu

