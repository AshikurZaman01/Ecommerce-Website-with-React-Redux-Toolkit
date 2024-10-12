import React from 'react'
import Links from './Links'

const NavLinks = () => {

    const navLinks = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Shop', path: '/shop' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'About', path: '/about' },
    ]
    return (
        <div>
            <ul className='flex justify-center items-center space-x-8 py-5'>
                {
                    navLinks.map((link) => <Links key={link.id} link={link}></Links>)
                }
            </ul>
        </div>
    )
}

export default NavLinks