import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'
import {FaHandHoldingDollar} from 'react-icons/fa6'
import { BannerTitle, MenuTitle } from './Data'
import {AiFillTag} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {BsPersonFillGear} from 'react-icons/bs'

function MenuBanner() {
  return (
    <>
    
        <div className="container mx-auto font-mon">
            <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 shadow">
                <div className='border-r-2 border-r-gray flex space-x-4'>
                    <TbTruckDelivery className='text-4xl'/>
                    <div>
                        {BannerTitle.map((item, index) => {
                            return(
                                <div key={index}>
                                    <h1>{item.free}</h1>
                                    <p className='text-sm text-gray-500'>{item.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='border-r-2 border-r-gray flex space-x-4'>
                    <FaHandHoldingDollar className='text-4xl'/>
                    <div>
                        {BannerTitle.map((item, index) => {
                            return(
                                <div key={index}>
                                    <h1>{item.pay}</h1>
                                    <p className='text-sm text-gray-500'>{item.secue}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='border-r-2 border-r-gray flex space-x-4'>
                    <BsPersonFillGear className='text-5xl'/>
                    <div>
                        {BannerTitle.map((item, index) => {
                            return(
                                <div key={index}>
                                    <h1>{item.support}</h1>
                                    <p className='text-sm text-gray-500'>{item.online}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='border-r-2 border-r-gray flex space-x-4'>
                    <RiMoneyDollarCircleLine className='text-5xl'/>
                    <div>
                        {BannerTitle.map((item, index) => {
                            return(
                                <div key={index}>
                                    <h1>{item.return}</h1>
                                    <p className='text-sm text-gray-500'>{item.days}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <AiFillTag className='text-4xl'/>
                    <div>
                        {BannerTitle.map((item, index) => {
                            return(
                                <div key={index}>
                                    <h1>{item.best}</h1>
                                    <p className='text-sm text-gray-500'>{item.brand}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default MenuBanner