// Libraries
import React, { useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Styles
import "../../assets/Styles/Layouts/HeaderTopBar.css"

// Data
import HeaderTopBarApi from '../../data/HeaderTopBar';

const HeaderTopBar = () => {
    // Hook
    // Header Top Bar
    const [backgroundColorHeaderTopBar, setBackgroundColorHeaderTopBar] = useState(null);
    // Swiper
    const [slideData, setSlideData] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        fetchSlidesHeaderTopBar();
    }, []);

    // Func
    const fetchSlidesHeaderTopBar = async () => {
        let res = await HeaderTopBarApi;
        setSlideData(res.items ?? []);
    }

    const changeBackGroundColorHeaderTopBar = (swiper) => {
        setBackgroundColorHeaderTopBar(slideData[swiper.realIndex].backgroundColor);
    }

    return (
        <>
            {
                slideData && slideData.length > 0 &&
                slideData.map((slideDataItem, index) => {
                    return (
                        <div key={`header-top-bar-${index}`} className="header-top-bar" style={backgroundColorHeaderTopBar ? { backgroundColor: backgroundColorHeaderTopBar } : {}}>
                            <div className='container'>
                                <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    loop={true}
                                    speed={0}
                                    navigation={{
                                        prevEl: navigationPrevRef.current,
                                        nextEl: navigationNextRef.current,
                                    }}
                                    onBeforeInit={(swiper) => {
                                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                                        swiper.params.navigation.nextEl = navigationNextRef.current;
                                    }}
                                    onSlideChange={(swiper) => changeBackGroundColorHeaderTopBar(swiper)}
                                >
                                    {
                                        slideDataItem.slideItems && slideDataItem.slideItems.length > 0 &&
                                        slideDataItem.slideItems.map((item, index) => {
                                            return (
                                                <SwiperSlide className='header-top-bar__item' key={`slide-header-top-bar-${index}`}>
                                                    <img className='header-top-bar__item-image' src={item.image} alt={""} />
                                                </SwiperSlide>
                                            )
                                        })
                                    }

                                    <div ref={navigationPrevRef} className="header-top-bar__swiper-button"><GrFormPrevious className='header-top-bar__swiper-icon swiper-button-prev' /></div>
                                    <div ref={navigationNextRef} className="header-top-bar__swiper-button"><GrFormNext className='header-top-bar__swiper-icon swiper-button-next' /></div>
                                </Swiper>
                            </div>
                        </div>
                    )
                })
            }
        </>


    )
}

export default HeaderTopBar