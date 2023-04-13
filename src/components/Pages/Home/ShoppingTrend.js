// Libraries
import React from 'react'

// Styles
import "../../../assets/Styles/Components/Home/ShoppingTrend.css"

const ShoppingTrend = (props) => {
    const { slide } = props;

    return (
        <>
            {
                slide.slideItems && slide.slideItems.length > 0 &&
                <div className='shopping-trend'>
                    <div className='container'>
                        <div className='shopping-trend__title'>
                            <h3 className='mb-0'>Xu hướng mua sắm</h3>
                        </div>
                        <div className='shopping-trend__content d-flex justify-content-center gap-2'>
                            {
                                slide.slideItems && slide.slideItems.length > 0 &&
                                slide.slideItems.map((item, index) => {
                                    return (
                                        <div key={`shopping-trend__item-${index}`} className='shopping-trend__item cursor-pointer position-relative'>
                                            <img className="shopping-trend__item-img img-fluid" src={item.image} alt="Shopping Trend" />
                                            <span className="shopping-trend__item-title position-absolute">{item.title}</span>
                                            <span className="shopping-trend__item-description position-absolute">{item.description}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ShoppingTrend