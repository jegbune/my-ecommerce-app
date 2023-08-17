import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
<Link to='/'><p>Home</p></Link>
<Link to='/About'><p>About</p></Link>
<Link to='/Contact'><p>Contact</p></Link>

<h1>This is the Contact page</h1>
        </>
    )
}

export default Contact
