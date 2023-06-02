// Lib
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

// Components
import Footer from './Footer'
import Header from './Header'
import HeaderTopBar from './HeaderTopBar'

// Api
import { GetSlideHeaderTopClient } from '../../apis/slideApiService';
import { GetProductCategoryNavigation } from '../../apis/productCategoryApiService'

const Layout = () => {
    // Data
    const [data, setData] = useState({
        slideHeaderTopBar: {},
        productCategoriesNavigation: []
    }); 

    const { slideHeaderTopBar, productCategoriesNavigation } = data;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [slideData, productCategoriesData] = await Promise.all([
                GetSlideHeaderTopClient(),
                GetProductCategoryNavigation(),
            ]);
    
            setData({
                slideHeaderTopBar: slideData,
                productCategoriesNavigation: productCategoriesData
            });
        } catch (error) {
            setData({
                slideHeaderTopBar: {},
                productCategoriesNavigation: []
            });
        }
    };

    return (
        <>
            <HeaderTopBar slide={slideHeaderTopBar} />
            <Header productCategories={productCategoriesNavigation} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout