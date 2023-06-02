// Libraries
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination"

import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Styles
import "../../assets/Styles/Components/Home/BigCampaign.css"

const BigCampaign = (props) => {
    const { slide } = props;
    // Hook
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    return (
        <>
            {
                slide &&
                <div className='big-campaign'>
                    <div className='container position-relative'>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={12}
                            slidesPerView={1}
                            loop={true}
                            speed={400}
                            slidesPerGroup={2}
                            pagination={{ clickable: true }}
                            navigation={{
                                prevEl: ".big-campaign__button-product-prev",
                                nextEl: ".big-campaign__button-product-next",
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                },
                                // // when window width is >= 1024px
                                // 1024: {
                                //     spaceBetween: 10,
                                //     slidesPerView: 3,
                                // },
                                // 1280: {
                                //     slidesPerGroup: 2,
                                //     slidesPerView: 4,
                                // },
                            }}
                        >
                            {
                                slide.slideItems && slide.slideItems.length > 0 &&
                                slide.slideItems.map((item, index) => {
                                    return (
                                        <SwiperSlide className='swiper-slide__item cursor-pointer' key={`swiper-slide__item-${index}`}>
                                            <img className='swiper-slide__item-image' src={item.image} alt={""} />
                                        </SwiperSlide>
                                    )
                                })
                            }


                        </Swiper>
                        <div ref={navigationPrevRef} className="big-campaign__button-product-prev rounded-button arrow-icon"><GrFormPrevious className='swiper-default__icon-button swiper-button-prev' /></div>
                        <div ref={navigationNextRef} className="big-campaign__button-product-next rounded-button arrow-icon"><GrFormNext className='swiper-default__icon-button swiper-button-next' /></div>
                    </div>

                </div>
            }
        </>
    )
}

export default BigCampaign