import React from 'react';
import { NavLink } from 'react-router-dom';

const Links = ({ link }) => {
    return (
        <li>
            <NavLink
                to={link.path}
                className={({ isActive, isPending }) =>
                    `px-4 py-2 rounded transition duration-300 
                    ${isActive ? 'text-red-500 font-bold' : isPending ? 'text-blue-500' : 'text-black hover:bg-gray-200'}`
                }
            >
                {link.name}
            </NavLink>
        </li>
    );
}

export default Links;
