import React from 'react';
import { categoryImages } from '../../../assets/data';

const CategorySection = () => {
    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-center mb-8">Explore Our Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categoryImages.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-64 overflow-hidden transform transition-transform duration-300 hover:scale-105 rounded-lg shadow-lg bg-white cursor-pointer"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-30 text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="mt-2">View All</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
