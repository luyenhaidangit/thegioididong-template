import React from 'react'
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Product from './pages/Product';
import GuestLayout from './components/Layouts/GuestLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: '/trang-chu',
                element: <Navigate to="/" />
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/san-pham",
                element: <Product />,
            }
        ],
    },
    // {
    //     path: "/",
    //     element: <GuestLayout />,
    //     children: [
    //         {
    //             path: "/login",
    //             element: <Login />,
    //         },
    //         {
    //             path: "/signup",
    //             element: <Signup />,
    //         },
    //     ],
    // }
]);

export default router