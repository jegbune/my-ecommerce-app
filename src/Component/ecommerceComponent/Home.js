import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import './home.css'
function Home() {
    return (
        <>
        <div className='top_banner'>
            <div className='container'>
                <div className='detail'>
                    <h2>The Best Note Book Collection 2023</h2>
                    <Link to= '/product' className='link'>Shop Now <BsArrowRight/> </Link>
                </div>
                <div className='img-box'>
                    <img src='./img/slider-img.png' alt='sliderimg' />
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/Mobile Phone.png' alt='mobile' />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home
