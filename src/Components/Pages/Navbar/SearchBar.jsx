import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <div className='relative flex-1  mx-4'>
            <form >
                <input className='w-full border py-2 px-4 rounded' type="text" name="" id="" placeholder="Search Products.." />
                <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
            </form>
        </div>
    )
}

export default SearchBar