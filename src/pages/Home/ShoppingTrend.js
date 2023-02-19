// React
import React, { useEffect, useState } from 'react'

// Style
import "../../assets/Styles/Client/Pages/Home/ShoppingTrend.css"

//Api
import ShoppingTrendApi from '../../data/ShoppingTrend'

const ShoppingTrend = () => {
    // Hook
    const [dataShoppingTrend, setDataShoppingTrend] = useState([]);

    useEffect(() => {
        fetchDataShoppingTrend();
    }, []);

    // Function
    const fetchDataShoppingTrend = async () => {
        let res = await ShoppingTrendApi;
        setDataShoppingTrend(res);
    }

    return (
        <div className='shopping-trend'>
            <div className='container'>
                <div className='shopping-trend__title'>
                    <h3 className='mb-0'>Xu hướng mua sắm</h3>
                </div>
                <div className='shopping-trend__content d-flex justify-content-center gap-2'>
                    {
                        dataShoppingTrend && dataShoppingTrend.length > 0 &&
                        dataShoppingTrend.map((item, index) => {
                            return (
                                <div className='shopping-trend__item cursor-pointer position-relative'>
                                    <img className="shopping-trend__item-img img-fluid" src={item.image} alt="Shopping Trend" />
                                    <span class="shopping-trend__item-title position-absolute">{item.title}</span>
                                    <span class="shopping-trend__item-description position-absolute">{item.description}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ShoppingTrend