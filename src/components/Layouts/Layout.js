// Lib
import React from 'react'
import { Outlet } from 'react-router'

// Components
import Footer from './Footer'
import Header from './Header'
import HeaderTopBar from './HeaderTopBar'

const Layout = () => {
    return (
        <>
            <HeaderTopBar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout