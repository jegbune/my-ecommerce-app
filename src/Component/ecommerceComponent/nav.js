import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'  
import { AiOutlineHeart } from 'react-icons/ai'  
import { BsBagCheck } from 'react-icons/bs'  
import { AiOutlineUser } from 'react-icons/ai'  
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
                    <img src='../icons8-logo-ios-16/icons8-logo-50.svg' />
                </div>
                <div className = 'search_box'>
                    <input type = 'text' value='' placeholder='Search Your products...'  autoComplete='off'/>
                    <button>Search</button>
                </div>
                <div className='icon'>
                    <div className='account'> 
                        <div className='user_icon'>
                        <AiOutlineUser />
                         </div>
                        <p> Hello, User</p>
                    </div>
                    <div className= 'second-icon'>
                    {/* <Link to ='/' className='link'><AiOutlineHeart /></Link>
                    <Link to = '/cart' className='link'><BsBagCheck /> </Link> */}
                    </div>

                </div>
 

            </div>            
        </div>

        <div className='header'>
            <div className='contact'>
                <ul>
                    <li> 
                        {/* <link to = '/'>Home</link> */}
                    </li>
                    <li> 
                        {/* <link to = '/product'>Pruduct</link> */}
                    </li>
                    <li> 
                        {/* <link to = '/about'>About</link> */}
                    </li>
                    <li> 
                        {/* <link to = '/contact'>Contact</link> */}
                    </li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default Nav
