import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'
import { BiHeadphone } from 'react-icons/bi'
import Homeproduct from './Homeproduct'
import './home.css'
function Home() {
    // const [Homeproduct, setHomeProduct] = useState('Homeproduct') 
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
                    <div className='detail'>
                        <p> 23 products </p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/smart watch.png' alt='watch' />
                    </div>
                    <div className='detail'>
                        <p> 18 products </p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/headphone.png' alt='headphone' />
                    </div>
                    <div className='detail'>
                        <p> 52 products </p>
                    </div>
                </div>
                
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/laptop.png' alt='cpu' />
                    </div>
                    <div className='detail'>
                        <p> 63 products </p>
                    </div>
                </div>
            </div>
        </div>

        <div className='about'>
            <div className='container'>
                <div className='box'>
                    <div className='icon'> 
                        <FiTruck />
                    </div>
                    <div className='detail'>
                        <h3>Free Shipping</h3>
                        <p>Order above $1000</p>
                    </div>
                    </div>
                <div className='box'>
                    <div className='icon'> 
                        <BsCurrencyDollar />
                    </div>
                    <div className='detail'>
                        <h3>Return & Refund</h3>
                        <p>Money Back Guaranty</p>
                    </div>
                </div>
                    
                <div className='box'>
                    <div className='icon'> 
                        <CiPercent />
                    </div>
                    <div className='detail'>
                        <h3>Member Discount</h3>
                        <p>On every order</p>
                    </div>
                </div>

                <div className='box'>
                    <div className='icon'> 
                        <BiHeadphone />
                    </div>
                    <div className='detail'>
                        <h3>Customer Support</h3>
                        <p>Every time call support</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='product'>
            <div classname='container'>
                <div className='box'>

                </div>
            </div>
        </div>
        </>
    )
}

export default Home
