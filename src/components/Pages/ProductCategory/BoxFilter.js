// Libraries
import React, { useState } from 'react'

import { GrFilter } from "react-icons/gr"
import { IoMdArrowDropdown } from "react-icons/io"

import ScrollContainer from 'react-indiana-drag-scroll'

import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Form from 'react-bootstrap/Form';
import { Range, getTrackBackground } from 'react-range';


// Styles
import "../../../assets/Styles/Components/ProductCategory/BoxFilter.css"


const BoxFilter = (props) => {
    const { attributeFilters } = props;
    const { brandFilter } = props;
    const { nameCategory } = props;

    const [values, setValues] = useState([0, 100]);

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

                    <Menu
                        menuButton={<MenuButton className='filter-item__title d-flex align-items-center gap-1'>
                            {<>
                                Hãng
                                <IoMdArrowDropdown />
                            </>}</MenuButton>}
                        arrow
                    >
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                        <div className='box-filter__item-filter'>
                            <img src="https://cdn.tgdd.vn/Brand/1/logo-iphone-220x48.png" />
                        </div>
                    </Menu>

                    <Menu
                        menuButton={<MenuButton className='filter-item__title d-flex align-items-center gap-1'>
                            {<>
                                Giá
                                <IoMdArrowDropdown />
                            </>}</MenuButton>}
                        arrow
                    >
                        <div className='quick-filter-price d-flex flex-wrap'>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Dưới 2 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Từ 2 - 4 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Dưới 2 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Từ 2 - 4 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Dưới 2 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Từ 2 - 4 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Dưới 2 triệu
                            </div>
                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                Từ 2 - 4 triệu
                            </div>
                        </div>
                        <div className='select-filter-range d-flex'>
                            <p class="range-toggle d-flex flex-column">
                                <div className='select-filter-range__title'>
                                    <span class="">Hoặc chọn mức giá phù hợp với bạn</span>
                                </div>
                                <div className='sele-filter-range__input-range mt-4 pb-4 d-flex justify-content-center'>
                                    <div class="row-input d-flex justify-content-center">
                                        <form class="range-price position-relative overflow-hidden">
                                            <span class="range-left">
                                                <input type="tel" maxlength="8" name="price-min-value" data-minvalue="500000" value="3.400" />
                                                <label class="place-holder">.000đ</label>
                                            </span>
                                            <span class="range-right">
                                                <input type="tel" maxlength="8" name="price-max-value" data-maxvalue="42000000" value="42.000" />
                                                <label class="place-holder">.000đ</label>
                                            </span>
                                        </form>
                                    </div>
                                </div>
                                <div className='select-filter-range__input px-4 d-flex justify-content-center'>
                                    <Range
                                        step={1}
                                        min={0}
                                        max={100}
                                        values={values}
                                        onChange={values => setValues(values)}
                                        renderTrack={({ props, children }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: '6px',
                                                    width: '100%',
                                                    background: getTrackBackground({
                                                        values: values,
                                                        colors: ['#ccc', '#4a90e2', '#ccc'],
                                                        min: 1,
                                                        max: 100,
                                                    }),
                                                }}
                                            >
                                                {children}
                                            </div>
                                        )}
                                        renderThumb={({ props }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    ...props.style,
                                                    height: '18px',
                                                    width: '18px',
                                                    borderRadius: "50%",
                                                    border: "1px solid #4a90e2",
                                                    backgroundColor: '#fff',
                                                }}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="btn-filter-price mt-4 d-flex justify-content-center w-100">
                                    <button className='btn-filter-readmore btn btn-primary rounded'>Xem kết quả</button>
                                </div>
                            </p>
                        </div>
                    </Menu>

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