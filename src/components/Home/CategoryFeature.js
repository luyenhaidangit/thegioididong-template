// Libraries
import React from 'react'

import ScrollContainer from 'react-indiana-drag-scroll'

// Styles
import "../../assets/Styles/Components/Home/CategoryFeature.css"

const CategoryFeature = (props) => {
    const { productCategories } = props;

    return (
        <>
            {
                productCategories && productCategories.length > 0 &&
                <div className='category-feature'>
                    <div className='container'>
                        <div className='category-feature__title'>
                            <h3 className='mb-0'>Danh mục nổi bật</h3>
                        </div>
                        <ScrollContainer className='category-feature__content d-flex flex-column'>
                            <aside className='category-feature__row d-flex justify-content-between gap-2'>
                                {
                                    productCategories && productCategories.length > 0 &&
                                    productCategories.map((item, index) => {
                                        if (index < 10) {
                                            return (
                                                <div key={`category-feature__item-${index}`} className='category-feature__item d-flex flex-column justify-content-start align-items-center cursor-pointer gap-2'>
                                                    <img className="category-feature__item-img img-fluid" src={item.image} alt="Shopping Trend" />
                                                    <p className='category-feature__item-name text-center'>{item.name}</p>
                                                </div>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </aside>
                            <aside className='category-feature__row d-flex justify-content-between gap-2'>
                                {
                                    productCategories && productCategories.length > 0 &&
                                    productCategories.map((item, index) => {
                                        if (index >= 10) {
                                            return (
                                                <div key={`category-feature__item-${index}`} className='category-feature__item d-flex flex-column justify-content-start align-items-center cursor-pointer gap-2'>
                                                    <img className="category-feature__item-img img-fluid" src={item.image} alt="Shopping Trend" />
                                                    <p className='category-feature__item-name text-center'>{item.name}</p>
                                                </div>
                                            )
                                        }
                                        return null;
                                    })
                                }
                            </aside>
                        </ScrollContainer>
                    </div>
                </div>
            }
        </>
    )
}

export default CategoryFeature