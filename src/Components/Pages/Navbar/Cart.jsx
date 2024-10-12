import React from 'react'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='flex items-center  space-x-4'>
            <Link to={"/cart"}>
                <FaShoppingCart className='text-lg '></FaShoppingCart>
            </Link>

            <div className='hidden md:block'>
                <button>
                    Login | Register
                </button>
            </div>

            <div className='block md:hidden'>
                <button>
                    <FaUser></FaUser>
                </button>
            </div>


        </div>
    )
}

export default Cart