import React from 'react'
import haderphoneblue from './PhoneElictronic/headphone_blue.png'
import fastion from './Shoe/Fashion.jpg'
import shoe1 from  './Shoe/1 (2).webp'
import shoe2 from './Shoe/2 (2).webp'
import shoe3 from './Shoe/1 (3).webp'
import shoe4 from './Shoe/1 (4).webp'
function Test() {
    return (
        <>


            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-col-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-3">
                    <div className='bg-blue-500'>
                        <img src={fastion} alt="" />
                    </div>
                    <div className='flex items-end col-span-3  gap-3'>
                        <img src={shoe1} style={{width: "200px"}} alt="" />
                        <img src={shoe2} style={{width: "200px"}} alt="" />
                        <img src={shoe3} style={{width: "200px"}} alt="" />
                        <img src={shoe4} style={{width: "200px"}} alt="" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Test