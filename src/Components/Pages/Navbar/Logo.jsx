import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className='text-lg font-bold'>
            <h1><Link to={"/"}>E-Shop</Link></h1>
        </div>
    )
}

export default Logo