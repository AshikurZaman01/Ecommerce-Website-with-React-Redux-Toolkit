import React from 'react';
import { Categories } from '../../../assets/data';
import Category from './Category';

const ShowCategories = () => {
    return (
        <div className='bg-white mt-2 px-4 md:px-16 lg:24'>
            <div className='container mx-auto py-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-3/12'>
                    <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>
                        <h1 className='capitalize'>Shop by Categories</h1>
                    </div>
                    <div>
                        <ul className='space-y-4 bg-gray-100 p-3 border'>
                            {Categories.map((category, index) => (
                                <Category key={index} category={category} />
                            ))}
                        </ul>
                    </div>
                </div>

                <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative ml-3'>
                    <img
                        className='h-full w-full object-cover rounded-lg'
                        src="https://tse2.mm.bing.net/th?id=OIG4.0JeB5q_pa_d2Q0NEiPJW&pid=ImgGn"
                        alt="E-Shop Banner"
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 rounded '>
                        <h2 className='text-3xl text-white font-bold mb-2'>Welcome to E-Shop</h2>
                        <p className='text-white mb-4'>Millions of Products at Your Fingertips</p>
                        <button className='bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-300'>
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowCategories;
