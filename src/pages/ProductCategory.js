// Libraries
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

// Components
import BoxFilter from '../components/Pages/ProductCategory/BoxFilter'
import ListProduct from '../components/Pages/ProductCategory/ListProduct'
import TopBanner from '../components/Pages/ProductCategory/TopBanner'

// Data
import ProductCategoryApi from '../data/ProductCategory'
import { GetProductCategoryTopBanner, GetProductCategoryBoxFilter } from '../apis/productCategoryApiService';

// Styles
import "../assets/Styles/Layouts/Body.css"

const ProductCategory = () => {
    // Hook
    const { id } = useParams();
    const [topBanner, setTopBanner] = useState({});
    const [boxFilter, setBoxFilter] = useState({});
    const [dataProductCategory, setDataProductCategory] = useState({});

    useEffect(() => {
        fetchTopBanner(id);
        fetchBoxFilter(id);
        fetchDataProductCategory();
    }, [id]);

    // Function
    const fetchDataProductCategory = async () => {
        let res = await ProductCategoryApi;
        setDataProductCategory(res);
    }

    const fetchTopBanner = async (id) => {
        let res = await GetProductCategoryTopBanner(id);
        setTopBanner(res.data);
    }

    const fetchBoxFilter = async (id) => {
        let res = await GetProductCategoryBoxFilter(id);
        setBoxFilter(res);
    }

    console.log(boxFilter?.rangePricesFilter)

    return (
        <div className='bg-white'>
            <TopBanner slide={topBanner?.slide} bannerFirst={topBanner?.bannerFirst} bannerSecond={topBanner?.bannerSecond} />
            <BoxFilter
                nameCategory={dataProductCategory?.name}
                attributeFilters={dataProductCategory?.boxFilter?.attributeFilters}
                rangePrices={boxFilter?.rangePricesFilter?.rangePrices}
                startPrice={boxFilter?.rangePricesFilter?.startPrice}
                endPrice={boxFilter?.rangePricesFilter?.endPrice}
                brandsFilter={boxFilter?.brandsFilter}
            />
            <ListProduct listProduct={dataProductCategory?.listProduct} />
        </div>
    )
}

export default ProductCategory