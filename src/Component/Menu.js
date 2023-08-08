import React from 'react'

function Car(props) {
    return <li>I am a { props.brand }</li>
}

function Menu() {
    const cars = [
        {id: 1, brand: 'Toyota'},
        {id: 2, brand: 'Audi'},
        {id: 3, brand: 'Mercedi Benz'},
        {id: 4, brand: 'Nissan'},
        {id: 5, brand: 'Ferrari'},
        {id: 6, brand: 'Cadallac'},
        {id: 7, brand: 'Ford'},
        {id: 7, brand: 'BMW'}
    ]

    return (
        <>
        {cars.map((car) => <Car key={car.id} brand = {car.brand} />)}
        </>        
    )
}

export default Menu

