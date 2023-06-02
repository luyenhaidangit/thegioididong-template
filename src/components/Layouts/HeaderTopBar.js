// Libraries
import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

// Styles
import "../../assets/Styles/Layouts/HeaderTopBar.css";

const HeaderTopBar = (props) => {
  const { slide } = props;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  if (!slide || !slide.slideItems || slide.slideItems.length === 0) {
    return null;
  }

  return (
    <>
      {
        <div className="header-top-bar">
          <div className="container">
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
            >
              {slide?.slideItems &&
                slide?.slideItems?.length > 0 &&
                slide?.slideItems?.map((item, index) => {
                  return (
                    <SwiperSlide
                      className="header-top-bar__item"
                      key={`slide-header-top-bar-${index}`}
                    >
                      <img
                        className="header-top-bar__item-image"
                        src={item?.image}
                        alt={""}
                      />
                    </SwiperSlide>
                  );
                })}

              <div
                ref={navigationPrevRef}
                className="header-top-bar__swiper-button"
              >
                <GrFormPrevious className="header-top-bar__swiper-icon swiper-button-prev" />
              </div>
              <div
                ref={navigationNextRef}
                className="header-top-bar__swiper-button"
              >
                <GrFormNext className="header-top-bar__swiper-icon swiper-button-next" />
              </div>
            </Swiper>
          </div>
        </div>
      }
    </>
  );
};

export default HeaderTopBar;
