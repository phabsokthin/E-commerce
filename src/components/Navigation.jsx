import React, { useState } from 'react'
import { CgMenuRight, CgClose } from 'react-icons/cg'
import { MenuTitle } from './Data'
import Mobile from './Mobile'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

function Navigation() {

    const [bg, setBg] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)

    return (
        <>

            <header className='font-mon'>
                <div className="container mx-auto">
                    {/* for mobile responsive */}
                    <div className='flex gap-x-5 cursor-pointer justify-end mt-3 mr-5 lg:hidden'>
                        <AiOutlineHeart className='hover:text-red-500 transition-all duration-200 ease-in' />
                        <AiOutlineShoppingCart className='hover:text-red-500 transition-all duration-200 ease-in' />
                        <AiOutlineUser className='hover:text-red-500 transition-all duration-200 ease-in' />
                    </div>


                    <div className='flex lg:justify-evenly justify-between items-center p-5'>
                        <a href="/" className='text-orange-500'>Logo</a>
                        <div onClick={() => setMobileNav(!mobileNav)} className='text-2xl  cursor-pointer lg:hidden'>
                            {mobileNav ? <CgClose /> : <CgMenuRight />}
                        </div>

                        {/* call navbar */}
                        <nav className='hidden lg:flex'>
                            <ul className='lg:flex md:gap-x-10'>
                                {MenuTitle.map((item, index) => {

                                    return (

                                        <li key={index}>
                                            <a href={item.href} className='hover:text-red-500 transition-all duration-200 ease-in'>{item.names}</a>
                                        </li>
                                    )

                                })}
                            </ul>
                        </nav>


                        <div class="lg:flex hidden ">
                            <input type="text" placeholder='Search....' id="small-input" class="block w-[250px] p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs 
                                focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>

                        <div className='flex hidden lg:flex gap-x-5 cursor-pointer '>
                            <AiOutlineHeart className='hover:text-red-500 transition-all duration-200 ease-in' />
                            <AiOutlineShoppingCart className='hover:text-red-500 transition-all duration-200 ease-in' />
                            <AiOutlineUser className='hover:text-red-500 transition-all duration-200 ease-in' />
                        </div>

                        {/* for mobile */}

                        <div className={`${mobileNav ? 'left-0' : '-left-full'} fixed lg:hidden w-full max-w-xs z-30 h-full  bottom-0 transition-all`}>
                            <Mobile />
                        </div>
                    </div>

                    {/* for responsvie mobile search */}
                    <div class="lg:flex lg:hidden p-5">
                        <input type="text" placeholder='Search....' id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs 
                                focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400
                                dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navigation