import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../../../Redux/productsSlice';
import { productsData } from '../../../assets/data';
import Product from './Product';

const TopProducts = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.productsSlice.products)

    useEffect(() => {
        dispatch(setProducts(productsData))
    }, [dispatch])

    console.log(products)

    return (
        <div className='container mx-auto py-12'>
            <div>
                <div>
                    <h1 className='text-2xl  font-bold text-center mb-6'>Top Products</h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {
                        products.slice(0, 5).map((product) => <Product key={product.id} product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    )
}

export default TopProducts