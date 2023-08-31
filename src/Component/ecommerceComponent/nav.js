import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'  
import './nav.css'

function Nav() {
    return (
        <>
        <div className='free'>
                <div className='icon'>
                <FaTruckMoving/> 
                </div>
            <p>FREE Shipping when shopping upto $1000</p>
        </div>
        <div className='main_header'>
            <div className='container'>
                <div className='logo'>
                    <img src='../icons8-logo-ios-16/icons8-logo-50.svg'></img>
                </div>

            </div>            
        </div>
        </>
    )
}

export default Nav
