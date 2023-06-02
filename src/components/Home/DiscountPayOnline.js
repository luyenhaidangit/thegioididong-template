// Libraries
import React from 'react'

import ScrollContainer from 'react-indiana-drag-scroll'

// Styles
import "../../assets/Styles/Components/Home/DiscountPayOnline.css"

const DiscountPayOnline = (props) => {
    // Hook
    const {dataSlideDiscountPayOnline} = props;

    return (
        <>
            {
                dataSlideDiscountPayOnline && dataSlideDiscountPayOnline?.slideItems?.length > 0 &&
                <div className='discount-pay-online'>
                    <div className='container'>
                        <div className='discount-pay-online__title'>
                            <h3 className='mb-0'>Giảm thêm khi thanh toán online</h3>
                        </div>
                        <ScrollContainer className='discount-pay-online__content d-flex gap-4'>
                            {
                                dataSlideDiscountPayOnline && dataSlideDiscountPayOnline?.slideItems.length > 0 &&
                                dataSlideDiscountPayOnline?.slideItems?.map((item, index) => {
                                    return (
                                        <div key={`discount-pay-online__item-${index}`} className='discount-pay-online__item d-flex flex-column justify-content-start align-items-center cursor-pointer gap-2'>
                                            <img className="dicount-pay-online__item-img" src={item.image} alt="Discount Pay Online" />
                                        </div>
                                    )
                                })
                            }
                        </ScrollContainer>
                    </div>
                </div>
            }
        </>
    )
}

export default DiscountPayOnline