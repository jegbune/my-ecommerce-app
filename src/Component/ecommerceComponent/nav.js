import React from 'react'
import { FaTruckMoving } from 'react-icons/fa'  
import { AiOutlineHeart } from 'react-icons/ai'  
import { BsBagCheck } from 'react-icons/bs'  
import { AiOutlineUser } from 'react-icons/ai'  
import { CiLogin } from 'react-icons/ci'  
import { CiLogout } from 'react-icons/ci'  
import './nav.css'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function Nav() {
    const { loginWithRedirect, logout } = useAuth0();
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
                    <img src='../icons8-logo-ios-16/icons8-logo-50.svg' alt='' />
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
                    <Link to ='/' className='link'>
                    <AiOutlineHeart />
                    </Link>
                    <Link to = '/cart' className='link'><BsBagCheck /> </Link>
                    </div>

                </div>
 

            </div>            
        </div>

        <div className='header'>
            <div className='container'>
                <div className='nav'>
                <ul>
                    <li> 
                        <Link to = '/' className='link'>Home</Link>
                    </li>
                    <li> 
                        <Link to = '/product' className='link'>Product</Link>
                    </li>
                    <li> 
                        <Link to = '/about' className='link'>About</Link>
                    </li>
                    <li> 
                        <Link to = '/contact' className='link'>Contact</Link>
                    </li>
                </ul>
                </div>
                <div className='auth'>
                    <button onClick={() => loginWithRedirect()}><CiLogin /></button>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout /></button> 
                </div>
            </div>

        </div>
        </>
    )
}

export default Nav
