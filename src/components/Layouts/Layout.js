// Lib
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

// Components
import Footer from './Footer'
import Header from './Header'
import HeaderTopBar from './HeaderTopBar'

// Data
import { GetSlideHeaderTopClient } from '../../apis/slideApiService';
import { GetProductCategoryNavigation } from '../../apis/productCategoryApiService'

const Layout = () => {
    const [dataSlideHeaderTopBar, setDataSlideHeaderTopBar] = useState({});
    const [dataProductCategoriesNavigation, setDataProductCategoriesNavigation] = useState([]);

    useEffect(() => {
        fetchSlidesHeaderTopBar();
        fetchDataProductCategoriesNavigation();
    }, []);

    // Func
    const fetchSlidesHeaderTopBar = async () => {
        let res = await GetSlideHeaderTopClient();
        setDataSlideHeaderTopBar(res);
    }

    const fetchDataProductCategoriesNavigation = async () => {
        let res = await GetProductCategoryNavigation();
        setDataProductCategoriesNavigation(res);
    }
    return (
        <>
            <HeaderTopBar slide={dataSlideHeaderTopBar} />
            <Header productCategories={dataProductCategoriesNavigation} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout