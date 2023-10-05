import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'


import Banner1 from './Banner/Banner2.jpg'
import Banner2 from './Banner/Banner1.jpg'
import Banner4 from './Banner/Banner4.jpg'
import Banner5 from './Banner/Banner5.jpg'

function Banner() {
    return (
        <>
            <div className='p-2'>
                <Swiper className='relative group'

                    spaceBetween={50}
                    slidesPerView={1}

                    navigation={{
                        prevEl: ".button-prev-slide",
                        nextEl: ".button-next-slide",
                    }}
                    centeredSlides={true}
                    pagination={{
                        clickable: true
                    }}

                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}

                    modules={[Navigation, Pagination, Autoplay]}

                >
                    <SwiperSlide>
                        <div>
                            <img src={Banner1} style={{ width: "100%" }} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={Banner2} style={{ width: "100%" }} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={Banner5} style={{ width: "100%" }} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={Banner4} style={{ width: "100%" }} alt="" />
                        </div>
                    </SwiperSlide>

                    <div className='button-prev-slide -left-[50rem] group-hover:left-0 duration-500 absolute top-[50%] z-10 px-4 p-4 bg-[#333] text-white'>
                        <BsArrowLeft />
                    </div>
                    <div className='button-next-slide -right-[50rem] group-hover:right-0 duration-500 absolute top-[50%] text-white z-10 px-4 p-4 bg-[#333]'>
                        <BsArrowRight />
                    </div>

                </Swiper>


            </div>
        </>


    )
}
export default Banner