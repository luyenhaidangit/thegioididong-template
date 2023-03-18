// Lib
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'

// Components
import Footer from './Footer'
import Header from './Header'
import HeaderTopBar from './HeaderTopBar'

// Data
import { GetSlideHeaderTopClient } from '../../apis/slideApiService';

const Layout = () => {
    const [dataSlideHeaderTopBar, setDataSlideHeaderTopBar] = useState({});

    useEffect(() => {
        fetchSlidesHeaderTopBar();
    }, []);

    // Func
    const fetchSlidesHeaderTopBar = async () => {
        let res = await GetSlideHeaderTopClient();
        setDataSlideHeaderTopBar(res);
    }
    return (
        <>
            <HeaderTopBar slide={dataSlideHeaderTopBar} />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout