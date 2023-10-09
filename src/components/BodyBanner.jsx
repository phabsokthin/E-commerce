import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css/navigation'


import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'
import {LiaShoppingBasketSolid} from 'react-icons/lia'

import haderphoneblue from './PhoneElictronic/headphone_blue.png'
import fastion from './Shoe/Fashion.jpg'
import shoe1 from './Shoe/1 (2).webp'
import shoe2 from './Shoe/2 (2).webp'
import shoe3 from './Shoe/1 (3).webp'
import shoe4 from './Shoe/1 (4).webp'
import shoe5 from './Shoe/1 (5).webp'
import shoe6 from './Shoe/1 (6).webp'
import shoe7 from './Shoe/2 (1).jpg'
import shoe8 from './Shoe/2 (1).webp'
import shoe9 from './Shoe/2 (2).webp'
import shoe10 from './Shoe/2 (3).webp'
import shoe11 from './Shoe/2 (4).webp'
import shoe12 from './Shoe/2.1.webp'
import shoe13 from './Shoe/2.webp'
import shoe14 from './Shoe/22.webp'
import shoe15 from './Shoe/3 (1).webp'
import shoe16 from './Shoe/3 (2).webp'


import Shopbanner from '../components/Banner/shop1.jpg'
import Shopbanner1 from './Banner/shop2.jpg'
import Shopbanner2 from './Banner/shop3.jpg'
import { BodyBannerTitle } from './Data';


function BodyBanner() {
    return (
        <>

            
            <div className="container mx-auto font-mon">
                <hr />
                <div className="grid p-2 grid-cols-1 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-3 gap-3 p-3">
                    <div className=''>
                        <div>
                            <img src={Shopbanner} alt="" />
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img src={Shopbanner1} style={{ width: "100%", height: "412px", objectFit: "cover" }} alt="" />
                        </div>
                    </div>
                    <div className='bg-blue-500'>
                        <div>
                            <img src={Shopbanner2} style={{ width: "100%", height: "412px", objectFit: "cover" }} alt="" />
                        </div>
                    </div>
                </div>

                <div className='flex space-x-4'>
                    <h1 className='mt-5 text-2xl font-bold'>CATEGORY</h1>
                    <div className='border-b-2 w-full mb-3'>
                    </div>
                </div>

                <div className='mt-10'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}

                    

                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide"
                        }}

                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            }

                        }}

                        modules={[Navigation, Pagination]}

                        className='relative'
                    >
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe1} className='' alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Bluecher}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe2} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Men}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price1}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe3} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Brog}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price2}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe4} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Balet}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price3}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe1} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Bluecher}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price1}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe5} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Rouger}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price4}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe6} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Fashion}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price5}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe7} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Eleventor}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price6}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe8} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Boot}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price7}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <div className='button-prev-slide absolute top-[30%] hover:bg-[#555] duration-500 cursor-pointer left-0 z-10 bg-[#333] py-3 p-3 text-white'>
                            <IoIosArrowBack />
                        </div>
                        <div className='button-next-slide absolute top-[30%] hover:bg-[#555] duration-500 cursor-pointer right-0 z-10 py-3 p-3 bg-[#333] text-white'>
                            <IoIosArrowForward />
                        </div>
                    </Swiper>
                </div>

            </div>

            <div className="container mx-auto font-mon mt-10">
                
                <div className='flex space-x-4'>
                    <h1 className='mt-5 text-2xl font-bold'>CATEGORY</h1>
                    <div className='border-b-2 w-full mb-3'>
                    </div>
                </div>

                <div className='mt-10'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}

                    

                        navigation={{
                            nextEl: ".button-next-slide",
                            prevEl: ".button-prev-slide"
                        }}

                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            }

                        }}

                        modules={[Navigation, Pagination]}

                        className='relative'
                    >
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe9} className='' alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Bluecher}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe10} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Men}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price1}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe11} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Brog}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price2}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe12} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Balet}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price3}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe13} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Bluecher}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price1}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe14} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Rouger}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price4}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe15} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Fashion}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price5}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe16} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Eleventor}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price6}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=''>
                                <img src={shoe16} alt="" />
                                <div className=''>

                                    {BodyBannerTitle.map((item, index) => {
                                        return (
                                            <div className='my-5' key={index}>
                                                <p className=''>{item.Boot}</p>

                                            </div>
                                        )
                                    })}
                                    <hr className='mt-[-10px]' />
                                    <div className='mt-3 flex items-center space-x-1'>
                                        {
                                            BodyBannerTitle.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <p className='font-bold'>{item.price7}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <div>
                                        <a href="/" className='hover:text-orange-500 text-4xl'><LiaShoppingBasketSolid /></a>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                            
                        </SwiperSlide>
                        
                        <div className='button-prev-slide absolute top-[30%] hover:bg-[#555] duration-500 cursor-pointer left-0 z-10 bg-[#333] py-3 p-3 text-white'>
                            <IoIosArrowBack />
                        </div>
                        <div className='button-next-slide absolute top-[30%] hover:bg-[#555] duration-500 cursor-pointer right-0 z-10 py-3 p-3 bg-[#333] text-white'>
                            <IoIosArrowForward />
                        </div>
                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default BodyBanner