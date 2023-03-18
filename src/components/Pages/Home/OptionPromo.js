// Libraries
import React from 'react'

// Styles
import "../../../assets/Styles/Components/Home/OptionPromo.css"

const OptionPromo = (props) => {
    // Hook
    const { slide } = props;

    return (
        <>
            {
                slide &&
                <div className='option-promo'>
                    <div className='container d-flex justify-content-between align-items-center gap-4 mt-4'>
                        {
                            slide.slideItems && slide.slideItems.length > 0 &&
                            slide.slideItems.map((item, index) => {
                                return (
                                    <div key={`option-promo__item-${index}`} className='option-promo__item d-flex justify-content-center align-items-center gap-2 w-100' style={{ backgroundColor: '#fff' }}>
                                        <img className='option-promo__item-img img-fluid' src={item.image} alt="option promo item" />
                                        <span className='option-promo__item-title'>{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}

export default OptionPromo