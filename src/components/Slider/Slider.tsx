import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import sliderImg from "../../assets/slider-img.jpg"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./slider.scss";

const Slider: React.FC = () => {
    return (
        <div className="slider">
            <div className="slider__container">
                <div className="slider__info">
                    <div className="slider__title">
                        SUMMER SALE
                        GEt 30% OFF
                        On all dress.
                    </div>
                    <div className="slider__btn">
                        shop now
                    </div>
                </div>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={2.5} // Видно центральный + часть предыдущего
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,  // Без поворота
                        // stretch: -50, // Уменьшаем прошлый слайд
                        // depth: 150, // Отдаляем его назад
                        modifier: 1,
                        slideShadows: false, // Убираем тени
                    }}
                    navigation={true}
                    modules={[EffectCoverflow]}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <img src={sliderImg} alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg} alt="3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
