import React from 'react';
import { FaStar } from 'react-icons/fa';

const Product = ({ product }) => {

    const rating = Math.ceil(product.rating);
    const stars = Array.from({ length: 5 }, (_, index) => index < rating);

    return (
        <div className='bg-white p-4 shadow  rounded relative border transform transition-transform duration-300 hover:scale-105 flex flex-col justify-center items-center space-y-4'>
            <div>
                <img className='w-full h-48 object-cover mb-4' src={product.image} alt={product.name} />
            </div>
            <div>
                <h3 className='text-lg font-semibold '>{product.name}</h3>
                <h3 className='text-gray-500'>${product.price}</h3>
            </div>
            <div className="product-rating flex items-center mt-2">
                {stars.map((filled, index) => (
                    <FaStar key={index} color={filled ? "#FFD700" : "#e4e5e8"} />
                ))}
            </div>

            <div>
                <button
                    className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer text-gray-800 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                >
                    Add To Cart
                    <svg
                        className="w-5 h-5"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>

            </div>

        </div>
    );
}

export default Product;
