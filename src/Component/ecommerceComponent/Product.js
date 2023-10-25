import React from 'react'
import Productdetail from './Productdetail'

function Product() {
    return (
        <>
        <h3># Products</h3>
        <p>Home . products</p>
        <div className='products'>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'> 
                    <h3>Categories</h3>
                    <ul>
                        <li>Tablet</li>
                        <li>Smart Watch</li>
                        <li>Headphone</li>
                        <li>Camera</li>
                        <li>Gaming</li>
                    </ul>
                    </div>
                </div>
                <div className='productbox'>
                    <div className='container'>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product
