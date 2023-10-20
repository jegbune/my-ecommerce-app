import React from 'react'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { RiFacebookFill } from 'react-icons/ri'

const Footer = () => {
    return(
        <>
        <div className='footer'>
            <div className='container'>
                <div className='about'>
                    <div className='logo'>
                        <img src='../icons8-logo-ios-16/icons8-logo-50.svg' alt='logo' />
                    </div>
                    <div className='detail'>
                        <p>We are a team of designers and developer that creat high quality WordPress</p>
                        <div className='icon'>
                            <li><RiFacebookFill /></li>
                            <li><AiOutlineInstagram /></li>
                            <li><AiOutlineTwitter /></li>
                            <li><BsYoutube /></li>
                        </div>
                    </div>
                </div>
                <div classname= 'account'>
                    <h3>My Account</h3>
                    <ul>
                        <li>Account</li>
                        <li>Order</li>
                        <li>Cart</li>
                        <li>Shipping</li>
                        <li>Return</li>
                    </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms Conditoins</li>
                </ul>
            </div>
        </div>
        </div>
        </>
    )
}

export default Footer
