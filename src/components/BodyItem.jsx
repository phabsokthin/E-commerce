import React from 'react'
import airport from './PhoneElictronic/airpods.png'

import { AiFillStar, AiOutlineStar, AiOutlineHeart, AiOutlineShoppingCart, AiFillEye } from 'react-icons/ai'


import haderphoneblue from './PhoneElictronic/headphone_blue.png'
import headphonepink from './PhoneElictronic/headphone_pink.png'
import headphonered from './PhoneElictronic/headphone_red.png'
import headphone from './PhoneElictronic/headphone.png'
import { ItemTitle } from './Data'

function BodyItem() {
    return (
        <>

            <div className="container mx-auto font-mon">
                <div className='flex space-x-4'>
                    <h1 className='mt-5 text-2xl font-bold'>FEARTURE</h1>
                    <div className='border-b-2 w-full mb-3'>
                    </div>
                </div>

                <div className="grid p-5 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 lg:grid-cols-4 xl:grid-cols-5">
                    <div className='shadow group flex justify-center'>
                        <div class="w-full h-full ">
                            <div class="relative overflow-hidden flex justify-center">
                                <img src={airport} style={{ width: "200px" }} alt="" />
                                <div class="absolute h-full w-full bg-black/20 space-x-2 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="/"><AiOutlineHeart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/"><AiOutlineShoppingCart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/" className='text-white text-2xl hover:text-orange-500 duration-500'><AiFillEye /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                {ItemTitle.map((itemm, index) => {
                                    return (
                                        <div className='ml-4' key={index}>
                                            <h1 className='text-xs text-gray-500'>{itemm.online}</h1>
                                            <p>{itemm.brand}</p>

                                        </div>
                                    )
                                })}
                                <hr />
                                <div className='w-full flex space-x-4 ml-4'>
                                    <div>
                                        {ItemTitle.map((itemm, index) => {
                                            return (
                                                <div className='' key={index}>
                                                    <h1 className='text-xs '>{itemm.price}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex mb-5'>
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiOutlineStar className='text-orange-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow group flex justify-center'>
                        <div class="w-full h-full ">
                            <div class="relative overflow-hidden flex justify-center">
                                <img src={haderphoneblue} style={{ width: "200px" }} alt="" />
                                <div class="absolute h-full w-full bg-black/20 space-x-2 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="/"><AiOutlineHeart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/"><AiOutlineShoppingCart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/" className='text-white text-2xl hover:text-orange-500 duration-500'><AiFillEye /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                {ItemTitle.map((itemm, index) => {
                                    return (
                                        <div className='ml-4' key={index}>
                                            <h1 className='text-xs text-gray-500'>{itemm.online}</h1>
                                            <p>{itemm.blue}</p>

                                        </div>
                                    )
                                })}
                                <hr />
                                <div className='w-full flex space-x-4 ml-4'>
                                    <div>
                                        {ItemTitle.map((itemm, index) => {
                                            return (
                                                <div className='' key={index}>
                                                    <h1 className='text-xs '>{itemm.price1}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex mb-5'>
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiOutlineStar className='text-orange-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow group flex justify-center'>
                        <div class="w-full h-full ">
                            <div class="relative overflow-hidden flex justify-center">
                                <img src={headphonepink} style={{ width: "200px" }} alt="" />
                                <div class="absolute h-full w-full bg-black/20 space-x-2 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="/"><AiOutlineHeart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/"><AiOutlineShoppingCart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/" className='text-white text-2xl hover:text-orange-500 duration-500'><AiFillEye /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                {ItemTitle.map((itemm, index) => {
                                    return (
                                        <div className='ml-4' key={index}>
                                            <h1 className='text-xs text-gray-500'>{itemm.online}</h1>
                                            <p>{itemm.pink}</p>

                                        </div>
                                    )
                                })}
                                <hr />
                                <div className='w-full flex space-x-4 ml-4'>
                                    <div>
                                        {ItemTitle.map((itemm, index) => {
                                            return (
                                                <div className='' key={index}>
                                                    <h1 className='text-xs '>{itemm.price2}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex mb-5'>
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiOutlineStar className='text-orange-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow group flex justify-center'>
                        <div class="w-full h-full ">
                            <div class="relative overflow-hidden flex justify-center">
                                <img src={headphonered} style={{ width: "200px" }} alt="" />
                                <div class="absolute h-full w-full bg-black/20 space-x-2 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="/"><AiOutlineHeart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/"><AiOutlineShoppingCart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/" className='text-white text-2xl hover:text-orange-500 duration-500'><AiFillEye /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                {ItemTitle.map((itemm, index) => {
                                    return (
                                        <div className='ml-4' key={index}>
                                            <h1 className='text-xs text-gray-500'>{itemm.online}</h1>
                                            <p>{itemm.music}</p>

                                        </div>
                                    )
                                })}
                                <hr />
                                <div className='w-full flex space-x-4 ml-4'>
                                    <div>
                                        {ItemTitle.map((itemm, index) => {
                                            return (
                                                <div className='' key={index}>
                                                    <h1 className='text-xs '>{itemm.prince3}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex mb-5'>
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiOutlineStar className='text-orange-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='shadow group flex justify-center'>
                        <div class="w-full h-full ">
                            <div class="relative overflow-hidden flex justify-center">
                                <img src={headphone} style={{ width: "200px" }} alt="" />
                                <div class="absolute h-full w-full bg-black/20 space-x-2 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href="/"><AiOutlineHeart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/"><AiOutlineShoppingCart className='text-white text-2xl hover:text-orange-500 duration-500' /></a>
                                    <a href="/" className='text-white text-2xl hover:text-orange-500 duration-500'><AiFillEye /></a>
                                </div>
                            </div>
                            <div className='space-y-2'>
                                {ItemTitle.map((itemm, index) => {
                                    return (
                                        <div className='ml-4' key={index}>
                                            <h1 className='text-xs text-gray-500'>{itemm.online}</h1>
                                            <p>{itemm.bass}</p>

                                        </div>
                                    )
                                })}
                                <hr />
                                <div className='w-full flex space-x-4 ml-4'>
                                    <div>
                                        {ItemTitle.map((itemm, index) => {
                                            return (
                                                <div className='' key={index}>
                                                    <h1 className='text-xs '>{itemm.price4}</h1>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className='flex mb-5'>
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiFillStar className='text-orange-500' />
                                        <AiOutlineStar className='text-orange-500' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BodyItem