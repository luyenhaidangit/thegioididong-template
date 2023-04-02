// Libraries
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Components
import BoxFilter from '../components/Pages/ProductCategory/BoxFilter'
import ListProduct from '../components/Pages/ProductCategory/ListProduct'
import TopBanner from '../components/Pages/ProductCategory/TopBanner'

// Data
import ProductCategoryApi from '../data/ProductCategory'
import { GetProductCategoryTopBanner } from '../apis/productCategoryApiService';

// Styles
import "../assets/Styles/Layouts/Body.css"

const ProductCategory = () => {
    // Hook
    const { id } = useParams();
    const [topBanner, setTopBanner] = useState({});

    const [dataProductCategory, setDataProductCategory] = useState({});

    useEffect(() => {
        fetchTopBanner(id);
        fetchDataProductCategory();
    }, []);

    // Function
    const fetchDataProductCategory = async () => {
        let res = await ProductCategoryApi;
        setDataProductCategory(res);
    }

    const fetchTopBanner = async (id) => {
        let res = await GetProductCategoryTopBanner(id);
        setTopBanner(res.data);
    }

    console.log(topBanner)

    return (
        <div className='bg-white'>
            <TopBanner slide={topBanner?.slide} bannerFirst={topBanner?.bannerFirst} bannerSecond={topBanner?.bannerSecond} />
            <BoxFilter
                nameCategory={dataProductCategory?.name}
                attributeFilters={dataProductCategory?.boxFilter?.attributeFilters}
                priceFilter={dataProductCategory?.boxFilter?.priceFilter}
                brandFilter={dataProductCategory?.boxFilter?.brandFilter}
            />
            <ListProduct listProduct={dataProductCategory?.listProduct} />
        </div>
    )
}

export default ProductCategory