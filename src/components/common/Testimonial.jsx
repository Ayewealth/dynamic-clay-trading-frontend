import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from "swiper"
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';

import "./Testimonial.css"

const Testimonial = () => {
    const swiperRef = useRef(null);

    const goToNextSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goToPrevSlide = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='small__section' id='testimonial'>
            <div className="container">
                <div className="testimonial__container">
                    <div className="testimonial__head">
                        <h3>Clients Feedback</h3>
                        <h2>DCT Users Share their <span>Experience</span></h2>
                    </div>
                    <div className="testimonial__content">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={30}
                            modules={[Pagination, Autoplay]}
                            autoplay={{ delay: 10000 }}
                            navigation={{ prevEl: '.prev-button', nextEl: '.next-button' }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='testimonial'>
                                    <h4>Peace of Mind with Secure & Insured Trading</h4>
                                    <span>The secure and insured trading environment gives me peace of mind. I can confidently invest knowing my assets are protected.</span>
                                    <div className='testimonial__inner'>
                                        <img src="/images/popular.jpg" alt="" />
                                        <div>
                                            <p>John D.</p>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='testimonial'>
                                    <h4>Best Prices for Trading</h4>
                                    <span>Trading with this platform has been an incredible experience. The prices are the best I’ve found, and the transactions are seamless.</span>
                                    <div className='testimonial__inner'>
                                        <img src="/images/popular.jpg" alt="" />
                                        <div>
                                            <p>Sarah M.</p>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='testimonial'>
                                    <h4>Effortless Crypto Buying & Investing</h4>
                                    <span>Buying and investing in crypto has never been easier. This platform’s intuitive design and efficient process make it my top choice.</span>
                                    <div className='testimonial__inner'>
                                        <img src="/images/popular.jpg" alt="" />
                                        <div>
                                            <p>Alex P.</p>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='testimonial'>
                                    <h4>Outstanding Customer Care</h4>
                                    <span>Outstanding customer care! Every time I’ve had a question, their support team has been prompt and incredibly helpful. Highly recommend!</span>
                                    <div className='testimonial__inner'>
                                        <img src="/images/popular.jpg" alt="" />
                                        <div>
                                            <p>Emily R.</p>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='testimonial'>
                                    <h4>Secure & User-Friendly Platform</h4>
                                    <span>This platform offers the perfect balance of security and user-friendliness. I feel confident trading here and appreciate the transparent pricing.</span>
                                    <div className='testimonial__inner'>
                                        <img src="/images/popular.jpg" alt="" />
                                        <div>
                                            <p>Michael T.</p>
                                            <span>Customer</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='testimonail__controls'>
                        <button className="prev-button" onClick={goToPrevSlide}>
                            <ChevronLeft />
                        </button>
                        <button className="next-button" onClick={goToNextSlide}>
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial