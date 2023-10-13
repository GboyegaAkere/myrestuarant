import React from 'react'
import { motion } from 'framer-motion'

const MenuContainer = () => {
  return (
    <section className=' w-full my-8' id='menu'>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingColor'>Our hot dishes</p>
        </div>
        <motion.hr whileHover={{scale:0.85}} className='w-[130px] h-2 bg-orange-500 rounded-lg'></motion.hr>
        <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 py-6'>
            <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'>
                <p>fruits</p> 
                <p>gg</p>   
            </div>

            <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'>
                <p>fruits</p> 
                <p>gg</p>   
            </div>

            <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'>
                <p>fruits</p> 
                <p>gg</p>   
            </div>

            <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'>
                <p>fruits</p> 
                <p>gg</p>   
            </div>

            <div className='group bg-white w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out'>
                <p>fruits</p> 
                <p>gg</p>   
            </div>
        </div>
    </section>
  )
}

export default MenuContainer