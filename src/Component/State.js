import React, { useState } from 'react'


function State() {
    const [cars,setCar] = useState([
        {
            brand: 'Ford',
            model: 'Mustang',
            year: 2004,
            color:'red'
        },
        {
            brand: 'Toyota',
            model: 'Camry',
            year: 2010,
            color:'Gold'
        },
        {
            brand: 'Honda',
            model: 'Civic',
            year: 2014,
            color:'Black'
        }
    ])

    const updateCars  = () => {
        setCar(prevState => {
            const updatedCars = [...prevState]
           updatedCars[2] = {...updatedCars[2], color:'Silver'};
           return updatedCars
        })
    }

    return (
        <>
        {cars.map((car) => (
            <p>I bought a {car.brand} {car.model} car, {car.year} model. it colour is {car.color} 
            </p>

        ))
        }

        <button
        type='button'
        onClick= {updateCars}>third color</button>
                
        </>
    )
}

export default State
