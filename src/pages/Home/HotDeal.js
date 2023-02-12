// React
import React, { useEffect, useState, useRef } from 'react'

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/navigation";

// Icon
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

// Style
import "../../assets/Styles/Client/Pages/Home/HotDeal.css"
import IconGift from "../../assets/Images/Icon/icon-gift.png"
import { AiFillStar } from 'react-icons/ai'

//Api
import HotDealApi from '../../data/HotDeal'

// Helper
import FormatCurrency from '../../helpers/Strings/FormatCurrency';

const HotDeal = () => {
    // Hook
    const [dataHotDeal, setDataHotDeal] = useState([]);
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);

    useEffect(() => {
        fetchDataHotDeal();
    }, []);

    // Function
    const fetchDataHotDeal = async () => {
        let res = await HotDealApi;
        setDataHotDeal(res);
        console.log(res)
    }

    return (
        <div className="hotdeal">
            <div className='container'>
                <div className="hotdeal__header">
                    {
                        dataHotDeal.image && dataHotDeal.image.length > 0 &&
                        <img className='hotdeal__header-image img-fluid w-100 overflow-hidden' src={dataHotDeal.image} alt="Banner Hotdeal" />
                    }
                </div>
                <div className="hotdeal__body position-relative p-3" style={dataHotDeal.style}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={12}
                        slidesPerView={1}
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
                            768: {
                                slidesPerView: 5,
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
                            dataHotDeal.products && dataHotDeal.products.length > 0 &&
                            dataHotDeal.products.map((item, index) => {
                                return (
                                    <SwiperSlide className='product-card__item px-3 cursor-pointer' key={`hotdeal__item-${index}`}>
                                        <div className='product-card__item-label d-flex gap-3 mb-3'>
                                            <span className='product-card__item-label__item' style={{ backgroundColor: "#f1f1f1", color: "#333" }}>Trả góp 0%</span>
                                        </div>
                                        <div className='product-card__item-image mb-3'>
                                            <img className='img-fluid' src={item.image} alt={"Product Card Imgae"} />
                                        </div>
                                        <div className='product-card__item-note d-flex gap-3 mb-2'>
                                            <span className='product-card__item-note__item d-inline-flex align-items-center gap-1 cursor-pointer' style={{ backgroundColor: "#e91e63", borderRadius: "20px", color: "#fff", padding: "0 6px 0 0", }}>
                                                <img className='product-card__item-note__item-img' src={IconGift} alt="product-card__item-note__item" />
                                                Đặt trước đến 17/02
                                            </span>
                                        </div>
                                        <h3 className='product-card__item-name mb-1'>
                                            {item.name}
                                        </h3>
                                        <p className='product-card__item-availability mb-1'>
                                            Hàng sắp về
                                        </p>
                                        <strong className='product-card__item-price mb-1'>{FormatCurrency(item.discounted_price)} <small className='product-card__item-discount-percentage ms-2'>-{item.discount_percent}%</small></strong>
                                        <p className='product-card__item-rating d-flex align-items-center mb-1'>
                                            <b className='product-card__item-number-star d-flex align-items-center me-2'>4.8 <AiFillStar /></b>
                                            (158)
                                        </p>
                                        <p className='product-card__item-comment'>Giảm 3 triệu, Trả góp 0%, Thu cũ tài trợ 3 triệu, Ốp lưng BTS</p>
                                    </SwiperSlide>
                                )
                            })
                        }


                    </Swiper>
                    <div ref={navigationPrevRef} className="swiper-default__button rounded-button arrow-icon"><GrFormPrevious className='swiper-default__icon-button swiper-button-prev' /></div>
                    <div ref={navigationNextRef} className="swiper-default__button rounded-button arrow-icon"><GrFormNext className='swiper-default__icon-button swiper-button-next' /></div>
                    {/* <ul className="hotdeal__product-list">
                        <li className="hotdeal__product-item">
                            <img src="path/to/product-image-1.jpg" alt="Product Image 1" />
                            <h3 className="hotdeal__product-name">Product Name 1</h3>
                            <div className="hotdeal__product-price">
                                <span className="hotdeal__product-discounted-price">200.000đ</span>
                                <span className="hotdeal__product-original-price">300.000đ</span>
                                <span className="hotdeal__product-discount-percentage">-30%</span>
                            </div>
                            <div className="hotdeal__product-quantity">
                                <span className="hotdeal__product-quantity-discounted">10</span>
                                <span className="hotdeal__product-quantity-remaining">20</span>
                            </div>
                        </li>
                        <li className="hotdeal__product-item">
                            <img src="path/to/product-image-2.jpg" alt="Product Image 2" />
                            <h3 className="hotdeal__product-name">Product Name 2</h3>
                            <div className="hotdeal__product-price">
                                <span className="hotdeal__product-discounted-price">250.000đ</span>
                                <span className="hotdeal__product-original-price">350.000đ</span>
                                <span className="hotdeal__product-discount-percentage">-28.6%</span>
                            </div>
                            <div className="hotdeal__product-quantity">
                                <span className="hotdeal__product-quantity-discounted">5</span>
                                <span className="hotdeal__product-quantity-remaining">15</span>
                            </div>
                        </li>
                    </ul> */}
                    <div className='readmore-btn d-flex justify-content-center mt-3 mb-0 cursor-pointer'>
                        Xem tất cả
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HotDeal