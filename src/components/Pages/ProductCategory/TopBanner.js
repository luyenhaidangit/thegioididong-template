// Libraries
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Style
import "../../../assets/Styles/Components/ProductCategory/TopBanner.css"

const TopBanner = (props) => {
    const { slide } = props;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    console.log(slide);

    return (
        <div className='top-banner mt-3'>
            <div className='container d-flex gap-3'>
                <div className='left-top-banner position-relative'>
                    {
                        slide &&
                        <>
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={12}
                                slidesPerView={1}
                                loop={true}
                                speed={400}
                                slidesPerGroup={1}
                                navigation={{
                                    prevEl: ".banner-top__button-product-prev-1",
                                    nextEl: ".banner-top__button-product-next-1",
                                }}
                                pagination={{ clickable: true }}
                            // onBeforeInit={(swiper) => {
                            //     swiper.params.navigation.prevEl = navigationPrevRef.current;
                            //     swiper.params.navigation.nextEl = navigationNextRef.current;
                            // }}
                            // breakpoints={{
                            //     1200: {
                            //         slidesPerView: 5,
                            //     },
                            //     // // when window width is >= 1024px
                            //     992: {
                            //         slidesPerView: 4,
                            //     },
                            //     768: {
                            //         slidesPerView: 3,
                            //     },
                            // }}
                            >
                                {
                                    slide?.slideItems && slide?.slideItems?.length > 0 &&
                                    slide?.slideItems.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img className='w-100' src={item?.image} alt='slide' />
                                            </SwiperSlide>
                                        )
                                    })
                                }
                            </Swiper>
                            <div ref={navigationPrevRef} className="banner-top__button-product-prev-1 swiper-default__button button--rectangle arrow-icon"><GrFormPrevious className='swiper-default__icon-button swiper-button-prev' /></div>
                            <div ref={navigationNextRef} className="banner-top__button-product-next-1 swiper-default__button button--rectangle arrow-icon"><GrFormNext className='swiper-default__icon-button swiper-button-next' /></div>

                        </>
                    }
                </div>

                <div className='right-top-banner'>
                    ok
                </div>
            </div>
        </div>
    )
}

export default TopBanner