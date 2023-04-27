// Libraries
import React, { useState, useEffect } from 'react'

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
    const { brandsFilter } = props;
    const { rangePrices } = props;

    const { startPrice } = props;
    const { setStartPrice } = props;
    const { endPrice } = props;
    const { setEndPrice } = props;
    const { productAttributesFilter } = props;

    const { attributeFilters } = props;
    const { nameCategory } = props;

    const [rangePrice, setRangePrice] = useState([0, 0]);


    // Handle submit
    const [selectedBrands, setSelectedBrands] = useState([]);

    const handleSelectedBrandItem = (item)=>{
        const index = selectedBrands.indexOf(item.id);
        if (index === -1) {
            const newSelectedItems = [...selectedBrands, item.id];
            setSelectedBrands(newSelectedItems);
          } else {
            const newSelectedItems = [...selectedBrands];
            newSelectedItems.splice(index, 1);
            setSelectedBrands(newSelectedItems);
        }
    }

    const handleSelectedRangePrice = (item)=>{
        console.log(item)
        if(item?.startPrice===0||item?.startPrice<=startPrice){
            item.startPrice = startPrice;
        }

        if(item?.endPrice===0){
            item.endPrice = endPrice;
        }

        setRangePrice([item?.startPrice,item?.endPrice]);
    }

    console.log(selectedBrands)

    useEffect(() => {
        setRangePrice([startPrice, endPrice]);
    }, [startPrice, endPrice]);

    console.log(startPrice)

    const changeRangePrice = (values) => {
        setRangePrice(values)
    }

    console.log(productAttributesFilter)

    const formatInputPrice = (price) => {
        const formattedNumber = (price / 1000).toLocaleString('vi-VN');
        return formattedNumber;
    }

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

                    {
                        brandsFilter && brandsFilter.length > 0 &&
                        <Menu
                            menuButton={<MenuButton className='filter-item__title'>
                                {<>
                                    Hãng
                                    <IoMdArrowDropdown />
                                </>}</MenuButton>}
                            arrow
                        >
                            <div className='filter-item__content d-flex align-items-center flex-wrap'>
                                <div className='filter-item__content d-flex align-items-center flex-wrap'>
                                    {
                                        brandsFilter && brandsFilter.length > 0 &&
                                        brandsFilter.map((item, index) => {
                                            return (
                                                <div key={`box-filter__item-filter-brand-${index}`} onClick={() => handleSelectedBrandItem(item)} className={`box-filter__item-filter ${selectedBrands.includes(item?.id) ? ' active' : ''}`}>
                                                    <img src={item.image} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className='filter-item__submit d-flex w-100 justify-content-center align-items-center gap-3'>
                                    <button onClick={() => setSelectedBrands([])} class="filter-item__submit-close">Bỏ chọn</button>
                                    <button class="filter-item__submit-readmore">Xác nhận</button>
                                </div>
                            </div>

                        </Menu>
                    }

                    <Menu
                        menuButton={<MenuButton className='filter-item__title d-flex align-items-center gap-1'>
                            {<>
                                Giá
                                <IoMdArrowDropdown />
                            </>}</MenuButton>}
                        arrow
                    >
                        <div className='quick-filter-price d-flex flex-wrap'>
                            <div className='filter-item__content d-flex align-items-center flex-wrap'>
                                {
                                    rangePrices && rangePrices.length > 0 &&
                                    rangePrices.map((item, index) => {
                                        return (
                                            <div onClick={() => handleSelectedRangePrice(item)} className={`box-filter__item-filter box-filter__item-filter__text ${((item.startPrice===rangePrice[0]) && item.endPrice===rangePrice[1])?'active': ''}`}>
                                                {item.name}
                                            </div>
                                        )
                                    })
                                }
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
                                                    <input value={formatInputPrice(rangePrice[0])} type="tel" />
                                                    <label class="place-holder">.000đ</label>
                                                </span>
                                                <span class="range-right">
                                                    <input value={formatInputPrice(rangePrice[1])} type="tel" />
                                                    <label class="place-holder">.000đ</label>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                    <div className='select-filter-range__input px-4 d-flex justify-content-center'>
                                        <Range
                                            step={10000}
                                            min={startPrice}
                                            max={endPrice}
                                            values={rangePrice}
                                            // onChange={values => setValues(values)}
                                            onChange={(values) => changeRangePrice(values)}
                                            renderTrack={({ props, children }) => (
                                                <div
                                                    {...props}
                                                    style={{
                                                        ...props.style,
                                                        height: '6px',
                                                        width: '100%',
                                                        background: getTrackBackground({
                                                            values: rangePrice,
                                                            colors: ['#ccc', '#4a90e2', '#ccc'],
                                                            min: startPrice,
                                                            max: endPrice,
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
                                </p>
                            </div>
                            <div className='filter-item__submit d-flex w-100 justify-content-center align-items-center gap-3'>
                                <button onClick={() => setRangePrice([startPrice,endPrice])} class="filter-item__submit-close">Bỏ chọn</button>
                                <button class="filter-item__submit-readmore">Xác nhận</button>
                            </div>
                        </div>

                    </Menu>

                    {
                        productAttributesFilter && productAttributesFilter.length > 0 &&
                        productAttributesFilter.map((item, index) => {
                            return (
                                <>
                                    <Menu
                                        menuButton={<MenuButton className='filter-item__title'>
                                            {<>
                                                {item.name}
                                                <IoMdArrowDropdown />
                                            </>}</MenuButton>}
                                        arrow
                                    >
                                        <div className='quick-filter-price d-flex flex-wrap'>
                                            <div className='filter-item__content d-flex align-items-center flex-wrap'>
                                                {
                                                    item?.attributeValueProducts && item?.attributeValueProducts?.length > 0 &&
                                                    item?.attributeValueProducts.map((value) => {
                                                        return (
                                                            <div className='box-filter__item-filter box-filter__item-filter__text'>
                                                                {value?.value}
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='filter-item__submit d-flex w-100 justify-content-center align-items-center gap-3'>
                                                <button class="filter-item__submit-close">Bỏ chọn</button>
                                                <button class="filter-item__submit-readmore">Xác nhận</button>
                                            </div>
                                        </div>
                                    </Menu>
                                </>
                                // <div key={`filter-attribute-${index}`} className='filter-item filter-attribute'>
                                //     <div className='filter-item__title d-flex align-items-center gap-1'>
                                //         {item.name}
                                //         <IoMdArrowDropdown />
                                //     </div>
                                //     <div className='filter-item__box'>

                                //     </div>
                                // </div>
                            )
                        })
                    }
                </ScrollContainer>
                <div className='quick-filter mt-2'>
                    {
                        brandsFilter && brandsFilter.length > 0 &&
                        <ScrollContainer className='quick-filter__brand d-flex flex-wrap gap-2'>
                            {
                                brandsFilter && brandsFilter.length > 0 &&
                                brandsFilter.map((item, index) => {
                                    return (
                                        <div key={`filter-item__brand-${index}`} className='filter-item__brand-title'>
                                            <img className='quick-filter__img' src={item.image} alt='filter-item' />
                                        </div>
                                    )
                                })
                            }
                        </ScrollContainer>
                    }

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