import React from 'react'

function Menu() {
    const cars = ['Toyota', 'Audi', 'Mercedi Benz', 'Nissan', 'Ferrari', 'Cadallac']
    return (
        <>
        {cars.map((car) => (<h1>I have {car} car</h1>))}
        </>        
    )
}

export default Menu

