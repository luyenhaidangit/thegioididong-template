// Libraries
import React from 'react'
// Components
import BoxFilter from '../components/Pages/ProductCategory/BoxFilter'
import ListProduct from '../components/Pages/ProductCategory/ListProduct'
import TopBanner from '../components/Pages/ProductCategory/TopBanner'


const ProductCategory = () => {
    return (
        <div>
            <TopBanner />
            <BoxFilter />
            <ListProduct />
        </div>
    )
}

export default ProductCategory