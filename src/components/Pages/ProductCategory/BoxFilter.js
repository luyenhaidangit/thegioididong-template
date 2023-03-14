// Libraries
import React from 'react'

import { GrFilter } from "react-icons/gr"
import { IoMdArrowDropdown } from "react-icons/io"

import ScrollContainer from 'react-indiana-drag-scroll'

// Styles
import "../../../assets/Styles/Components/ProductCategory/BoxFilter.css"

const BoxFilter = (props) => {
    const { attributeFilters } = props;
    const { brandFilter } = props;
    const { nameCategory } = props;

    return (
        <div className='box-filter'>
            <div className='container'>
                <ScrollContainer className='box-filter-main d-flex mt-3 gap-2 flex-wrap'>
                    <div className='filter-item filter-total'>
                        <div className='filter-item__title d-flex align-items-center gap-1'>
                            <GrFilter />
                            Bộ lọc
                        </div>
                        <div className='filter-item__box'>

                        </div>
                    </div>
                    <div className='filter-item filter-brand'>
                        <div className='filter-item__title d-flex align-items-center gap-1'>
                            Hãng
                            <IoMdArrowDropdown />
                        </div>
                        <div className='filter-item__box'>

                        </div>
                    </div>
                    <div className='filter-item filter-price'>
                        <div className='filter-item__title d-flex align-items-center gap-1'>
                            Giá
                            <IoMdArrowDropdown />
                        </div>
                        <div className='filter-item__box'>

                        </div>
                    </div>

                    {
                        attributeFilters && attributeFilters.length > 0 &&
                        attributeFilters.map((item, index) => {
                            return (
                                <div key={`filter-attribute-${index}`} className='filter-item filter-attribute'>
                                    <div className='filter-item__title d-flex align-items-center gap-1'>
                                        {item.name}
                                        <IoMdArrowDropdown />
                                    </div>
                                    <div className='filter-item__box'>

                                    </div>
                                </div>
                            )
                        })
                    }
                </ScrollContainer>
                <div className='quick-filter mt-2'>
                    <ScrollContainer className='quick-filter__brand d-flex flex-wrap gap-2'>
                        {
                            brandFilter && brandFilter.length > 0 &&
                            brandFilter.map((item, index) => {
                                return (
                                    <div key={`filter-item__brand-${index}`} className='filter-item__brand-title'>
                                        <img className='quick-filter__img' src={item.image} alt='filter-item' />
                                    </div>
                                )
                            })
                        }
                    </ScrollContainer>
                    {
                        attributeFilters && attributeFilters.length > 0 &&
                        attributeFilters.map((item, index) => {
                            return (
                                <div key={`quick-filter__attribute-${index}`} className='quick-filter__attribute mt-2'>
                                    {
                                        item?.quickFilter && item?.quickFilter === true &&
                                        <>
                                            <span>Chọn <span className='text-lowercase'>{nameCategory}</span> theo <span className='text-lowercase'>{item.name}</span>:</span>
                                            <ScrollContainer className='quick-filter__attribute-item d-flex flex-wrap gap-2 mt-2'>
                                                {
                                                    item?.attributeValues && item?.attributeValues?.length > 0 &&
                                                    item?.attributeValues?.map((itemValue, index) => {
                                                        return (
                                                            <div key={`filter-item__attribute-${index}`} className='filter-item__brand-title'>
                                                                {
                                                                    itemValue.value
                                                                }
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </ScrollContainer>
                                        </>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default BoxFilter