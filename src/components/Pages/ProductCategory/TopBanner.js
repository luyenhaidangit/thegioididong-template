// Libraries
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination"

import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Style
import "../../../assets/Styles/Components/ProductCategory/TopBanner.css"

const TopBanner = (props) => {
    const { slide } = props;
    const { bannerFirst } = props;
    const { bannerSecond } = props;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    console.log(bannerFirst);

    return (
        <div className='top-banner mt-3'>
            <div className='container d-flex align-items-center gap-3'>
                <div className='left-top-banner position-relative'>
                    {
                        slide &&
                        <>
                            <Swiper
                                modules={[Navigation, Pagination]}
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
                                breakpoints={{
                                    768: {

                                    },
                                }}
                            >
                                {
                                    slide?.slideItems && slide?.slideItems?.length > 0 &&
                                    slide?.slideItems.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <img className='top-slide__item' src={item?.image} alt='slide' />
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

                <div className='right-top-banner d-flex w-100 flex-column gap-2'>
                    <div className='top-banner'>
                        {
                            bannerFirst &&
                            <img className='w-100' src={bannerFirst?.image} alt='slide' />
                        }
                    </div>
                    <div className='top-banner'>
                        {
                            bannerSecond &&
                            <img className='w-100' src={bannerSecond?.image} alt='slide' />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBanner