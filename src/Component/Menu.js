import React from 'react'

function Menu() {
    const vehicles = ['mustang', 'f-150', 'expedition'] 
    const [car, truck, suv] = vehicles;

    return <p> I have a {car}, with a model of {truck}. and it is {suv}</p>
    
}
export default Menu

