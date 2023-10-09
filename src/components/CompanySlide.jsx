import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import logo1 from './Company/logo-1.png'
import logo2 from './Company/logo-2.png'
import logo3 from './Company/logo-3.png'
import logo4 from './Company/logo-4.png'
import logo5 from './Company/logo.png'

function CompanySlide() {
    return (
        <>
            <div className="container mx-auto mt-10 font-mon">
                <div className='flex space-x-4'>
                    <h1 className='mt-5 text-2xl font-bold'>Company</h1>
                    <div className='border-b-2 w-full mb-3'>
                    </div>
                </div>


                <div className='mt-10 gap-3'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={2}
                        autoplay={{ 
                            delay:2000,
                            disableOnInteraction:false
                         }}

                         breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            
                          }}

                         modules={[Autoplay]}
                         className='m-10 px-10'

                    >
                        <SwiperSlide className='shadow  my-10'>

                            <div className='p-10'>
                                <div>
                                    <img src={logo1} style={{ width: "200px", height: "80px", objectFit: "contain" }} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='shadow  my-10'>

                            <div className='p-10'>
                                <div>
                                    <img src={logo2} style={{ width: "200px", height: "80px", objectFit: "contain" }} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='shadow my-10'>

                            <div className='p-10'>
                                <div>
                                    <img src={logo3} style={{ width: "200px", height: "80px", objectFit: "contain" }} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='shadow  my-10'>

                            <div className='p-10'>
                                <div>
                                    <img src={logo4} style={{ width: "200px", height: "80px", objectFit: "contain" }} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide className='shadow my-10'>

                            <div className='p-10'>
                                <div>
                                    <img src={logo5} style={{ width: "200px", height: "80px", objectFit: "contain" }} alt="" />
                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>


        </>
    )
}

export default CompanySlide