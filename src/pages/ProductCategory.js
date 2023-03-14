// Libraries
import React, { useEffect, useState } from 'react'

// Components
import BoxFilter from '../components/Pages/ProductCategory/BoxFilter'
import ListProduct from '../components/Pages/ProductCategory/ListProduct'
import TopBanner from '../components/Pages/ProductCategory/TopBanner'

// Data
import ProductCategoryApi from '../data/ProductCategory'

// Styles
import "../assets/Styles/Layouts/Body.css"

const ProductCategory = () => {
    // Hook
    const [dataProductCategory, setDataProductCategory] = useState({});

    useEffect(() => {
        fetchDataProductCategory();
    }, []);

    // Function
    const fetchDataProductCategory = async () => {
        let res = await ProductCategoryApi;
        setDataProductCategory(res);
    }

    return (
        <>
            <TopBanner slide={dataProductCategory?.topBanner?.slide} bannerFirst={dataProductCategory?.topBanner?.bannerFirst} bannerSecond={dataProductCategory?.topBanner?.bannerSecond} />
            <BoxFilter
                nameCategory={dataProductCategory?.name}
                attributeFilters={dataProductCategory?.boxFilter?.attributeFilters}
                priceFilter={dataProductCategory?.boxFilter?.priceFilter}
                brandFilter={dataProductCategory?.boxFilter?.brandFilter}
            />
            <ListProduct listProduct={dataProductCategory?.listProduct} />
        </>
    )
}

export default ProductCategory