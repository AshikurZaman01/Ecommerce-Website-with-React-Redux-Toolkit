import React from 'react';

const Items = ({ item }) => {
    return (
        <div className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <div className='flex flex-col items-center space-y-2'>
                <span className='text-center text-3xl '>{item.icon}</span>
                <h3 className='mt-2 font-semibold text-gray-700'>{item.title}</h3>
                <p className='mt-1 text-gray-500'>{item.description}</p>
            </div>
        </div>
    );
};

export default Items;
