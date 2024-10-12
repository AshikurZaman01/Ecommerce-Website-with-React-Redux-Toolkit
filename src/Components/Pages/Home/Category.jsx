import React from 'react'

const Category = ({ category }) => {
    return (
        <li className='flex items-center text-sm  font-medium'>
            <div className=''>
                {category}
            </div>
        </li>
    )
}

export default Category