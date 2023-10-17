import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
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
                            <li><RiFacebookFill /></li>
                            <li><RiFacebookFill /></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer
