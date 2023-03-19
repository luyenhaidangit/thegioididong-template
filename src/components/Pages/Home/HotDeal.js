// Libraries
import React, { useEffect, useState, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import { AiFillStar } from 'react-icons/ai'

// Style
import "../../../assets/Styles/Components/Home/HotDeal.css"
import IconGift from "../../../assets/Images/Icon/icon-gift.png"

import HotDealBanner from "../../../assets/Images/HotDeal/hotdeal.png"

// Api
import HotDealApi from '../../../data/HotDeal'

// Helper
import FormatCurrency from '../../../helpers/Strings/FormatCurrency';

const HotDeal = (props) => {
    const { products } = props;
    // Hook
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
            {
                products && products.length > 0 &&
                <div className="hotdeal">
                    <div className='container'>
                        <div className="hotdeal__header cursor-pointer">
                            <img className='hotdeal__header-image img-fluid w-100 overflow-hidden' src={HotDealBanner} alt="Banner Hotdeal" />
                        </div>
                        <div className="hotdeal__body position-relative p-3" style={{ backgroundColor: "#B3141B" }}>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={12}
                                slidesPerView={2}
                                loop={true}
                                speed={400}
                                slidesPerGroup={2}
                                navigation={{
                                    prevEl: navigationPrevRef.current,
                                    nextEl: navigationNextRef.current,
                                }}
                                pagination={{ clickable: true }}
                                onBeforeInit={(swiper) => {
                                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                                    swiper.params.navigation.nextEl = navigationNextRef.current;
                                }}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 5,
                                    },
                                    // // when window width is >= 1024px
                                    992: {
                                        slidesPerView: 4,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {
                                    products && products.length > 0 &&
                                    products.map((item, index) => {
                                        return (
                                            <SwiperSlide className='product-card__item cursor-pointer' key={`hotdeal__item-${index}`}>
                                                {
                                                    item.isInterest && item.isInterest === true &&
                                                    <div className='product-card__item-label d-flex gap-3 mb-3'>
                                                        <span className='product-card__item-label__item' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>Trả góp 0%</span>
                                                    </div>
                                                }
                                                <div className='product-card__item-image d-flex justify-content-center mb-3'>
                                                    <img className='img-fluid' src={item.image} alt={"Product Card Imgae"} />
                                                </div>
                                                {
                                                    item.badgeProduct &&
                                                    <div className='product-card__item-note d-flex gap-3 mb-2'>
                                                        <span className='product-card__item-note__item d-inline-flex align-items-center gap-1 cursor-pointer' style={{ background: item?.badgeProduct?.backgroundColor, borderRadius: "20px", color: "#fff", padding: "0 6px 0 0", }}>
                                                            <img className='product-card__item-note__item-img' src={item?.badgeProduct?.image} alt="product-card__item-note__item" />
                                                            {
                                                                item?.badgeProduct?.name
                                                            }
                                                        </span>
                                                    </div>
                                                }

                                                <h3 className='product-card__item-name mb-1'>
                                                    {item.name}
                                                </h3>
                                                {/* <p className='product-card__item-availability mb-1'>
                                                    Hàng sắp về
                                                </p> */}
                                                <strong className='product-card__item-price mb-1'>{FormatCurrency(item.discountedPrice)} <small className='product-card__item-discount-percentage ms-2'>-{item.discountPercent}%</small></strong>
                                                {
                                                    item.starRating > 0 &&
                                                    <>
                                                        <p className='product-card__item-rating d-flex align-items-center mb-1'>
                                                            <b className='product-card__item-number-star d-inline-flex align-items-center me-2'>{item.starRating} <AiFillStar /></b>
                                                            ({item.reviewCount})
                                                        </p>
                                                    </>

                                                }

                                                {
                                                    <p className='product-card__item-comment p-0 mt-1'>{item.shortDescription}</p>
                                                }
                                            </SwiperSlide>
                                        )
                                    })
                                }


                            </Swiper>
                            <div ref={navigationPrevRef} className="swiper-default__button button--rectangle arrow-icon"><GrFormPrevious className='swiper-default__icon-button swiper-button-prev' /></div>
                            <div ref={navigationNextRef} className="swiper-default__button button--rectangle arrow-icon"><GrFormNext className='swiper-default__icon-button swiper-button-next' /></div>
                            <div className='readmore-btn d-flex justify-content-center mt-3 mb-0 cursor-pointer'>
                                Xem tất cả
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}

export default HotDeal