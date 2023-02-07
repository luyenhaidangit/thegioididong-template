// React
import React, { useEffect, useRef, useState } from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

// Style
import "../../assets/Styles/Client/Pages/Home/BigCampaign.css"

// Icon
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Api
import BigCampaignApi from '../../data/BigCampaign'

const BigCampaign = () => {
    // Hook
    const [bigCampaignData, setBigCampaignData] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        fetchBigCampaignData();
    }, []);

    // Func
    const fetchBigCampaignData = async () => {
        let res = await BigCampaignApi;
        setBigCampaignData(res);
        console.log(res)
    }

    return (
        <div className='big-campaign position-relative'>
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
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
            >
                {
                    bigCampaignData && bigCampaignData.length > 0 &&
                    bigCampaignData.map((item, index) => {
                        return (
                            <SwiperSlide className='swiper-slide__item' key={`swiper-slide__item-${index}`}>
                                <img className='swiper-slide__item-image' src={item.image} alt={""} />
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
            <div ref={navigationPrevRef} className="swiper-default__button rounded-button arrow-icon"><GrFormPrevious className='swiper-default__icon-button swiper-button-prev' /></div>
            <div ref={navigationNextRef} className="swiper-default__button rounded-button arrow-icon"><GrFormNext className='swiper-default__icon-button swiper-button-next' /></div>
        </div>
    )
}

export default BigCampaign