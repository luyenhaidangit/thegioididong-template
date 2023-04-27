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
import { GetProductsProductCategoryDetailPage } from '../apis/productApiService';

// Styles
import "../assets/Styles/Layouts/Body.css"

const ProductCategory = () => {
    // Hook
    const { id } = useParams();
    const [topBanner, setTopBanner] = useState({});
    const [boxFilter, setBoxFilter] = useState({});
    const [dataProductCategory, setDataProductCategory] = useState({});

    const [rangePrices, setRangePrices] = useState([]);
    const [startPrice, setStartPrice] = useState(0);
    const [endPrice, setEndPrice] = useState(0);
    const [productAttributesFilter, setProductAttributesFilter] = useState([]);

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetchTopBanner(id);
        fetchBoxFilter(id);
        fetchDataProductCategory();

        const request = {
            productCategoryId: id,
        }
        fetchListProduct(request);
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
        setStartPrice(res?.rangePricesFilter?.startPrice);
        setEndPrice(res?.rangePricesFilter?.endPrice);
        setProductAttributesFilter(res?.productAttributesFilter);
        setRangePrices(res?.rangePricesFilter?.rangePrices);
    }

    const fetchListProduct = async (request) => {
        let res = await GetProductsProductCategoryDetailPage(request);
        setListProduct(res);
    }

    console.log(boxFilter)

    console.log(listProduct)

    return (
        <div className='bg-white'>
            <TopBanner slide={topBanner?.slide} bannerFirst={topBanner?.bannerFirst} bannerSecond={topBanner?.bannerSecond} />
            <BoxFilter
                nameCategory={dataProductCategory?.name}
                brandsFilter={boxFilter?.brandsFilter}
                startPrice={startPrice}
                setStartPrice={setStartPrice}
                setEndPrice={setEndPrice}
                endPrice={endPrice}
                rangePrices={rangePrices}
                productAttributesFilter={productAttributesFilter}
            />
            <ListProduct listProduct={listProduct} />
        </div>
    )
}

export default ProductCategory