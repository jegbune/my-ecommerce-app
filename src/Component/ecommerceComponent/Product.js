import React, {useState} from 'react'
import Productdetail from './Productdetail'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsEye } from 'react-icons/bs'
import './Product.css'

function Product() {
    const [Product, setProduct] = useState(Productdetail)
    const filterproduct = (product)=>{
         const update = Productdetail.filter((x)=> {
            return x.Cat === product
         })
         setProduct(update);
    }

    const AllProducts = () => {
        setProduct(Productdetail)
    }
    return (
        <>
        <div className='products'>
        <h2># Products</h2>
        <p>Home . products</p>
            <div className='container'>
                <div className='filter'>
                    <div className='categories'> 
                    <h3>Categories</h3>
                    <ul>
                        <li onClick={() => AllProducts () }>All Product</li>
                        <li onClick={() => filterproduct("Tablet")}>Tablet</li>
                        <li onClick={() => filterproduct("Smart Watch")}>Smart Watch</li>
                        <li onClick={() => filterproduct("Headphone")}>Headphone</li>
                        <li onClick={() => filterproduct("Camera")}>Camera</li>
                        <li onClick={() => filterproduct("Powerbank")}>Power Bank</li>
                        <li onClick={() => filterproduct("Gaming")}>Gaming</li>
                    </ul>
                    </div>
                </div>
                <div className='productbox'>
                    <div className='contant'>
                        {
                            Product.map((curElm)=> {
                                return(
                                    <>
                                    <div className='box' key={curElm.id}>
                                        <div className='img-box'>
                                            <img src={curElm.Img} alt={curElm.Title}/>                                
                                            <div className='icon'>
                                                <li><AiOutlineShoppingCart /></li>
                                                <li><BsEye /></li>
                                                <li><AiOutlineHeart /></li>
                                            </div>
                                        </div>
                                    <div className='detail'>
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>{curElm.Price} </h4>
                                    </div>
                                </div>
                                    </>  
                                )
                            }) 
                                 
                            }
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product
