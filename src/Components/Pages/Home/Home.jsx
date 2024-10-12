import React from 'react'
import ShowCategories from './ShowCategories'
import InforSection from '../InforSection/InforSection'
import CategorySection from '../CategorySection/CategorySection'
import TopProducts from '../TopProducts/TopProducts'

const Home = () => {
    return (

        <div className='container mx-auto'>
            <ShowCategories></ShowCategories>

            <InforSection></InforSection>

            <CategorySection></CategorySection>

            <TopProducts></TopProducts>
        </div>


    )
}

export default Home