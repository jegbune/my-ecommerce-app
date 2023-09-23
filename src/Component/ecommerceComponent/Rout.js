import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Product from './Product.js'
import About from './About.js'
import Contact from './Contact.js'

function Rout() {
    return (
        <>
        <Routes>
            <Route path ='/' element= {<Home/>}/>
            <Route path ='/product' element= {<Product/>}/>
            <Route path ='/about' element= {<About/>}/>
            <Route path ='/contact' element= {<Contact/>}/>
        </Routes>
        </>
    )
}

export default Rout
