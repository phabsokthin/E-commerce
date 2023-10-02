import React from 'react'
import { MenuTitle } from './Data'

function Mobile() {
  return (
    <>
    
    <nav className='w-full bg-white h-full shadow-2xl'>
        <ul className='h-full items-center p-[40px] space-y-6 gap-y-6'>
            {MenuTitle.map((item, index) => {
                return(
                    <li key={index}>
                        <a href={item.href} className='hover:text-red-500 transition-all duration-200 ease-in'>{item.names}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
    
    </>
  )
}

export default Mobile