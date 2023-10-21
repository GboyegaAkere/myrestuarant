import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from "react-icons/ri";
import { motion } from 'framer-motion'
import Fi1 from "../img/fi1.png"
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';

const CartContainer = () => {
  return (
    <div className='fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
        <div className='ww-full flex items-center justify-between p-4'>
                <motion.div whileTap={{scale:0.75}}>
                    <MdOutlineKeyboardBackspace className='text-gray-600 text-3xl cursor-pointer'/>
                    
                </motion.div>
                <p className='font-semibold'>Carts</p>
                <motion.div whileTap={{scale:0.75}} className='flex flex-row items-center gap-1 bg-gray-300 rounded-md p-1 cursor-pointer'> 
                    <p className='font-semibold '>Clear</p>
                    <RiRefreshFill className=''/>
                </motion.div>
        </div>

        {/* Buttom Section */}
        <div className='w-full h-full bg-black rounded-t-[2rem] flex flex-col'>
            <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll'>
                {/* cartItems */}
                <div className='w-full p-1 px-2 rounded-lg bg-gray-700 flex items-center gap-2'>
                    <img src={Fi1} alt="" className='w-20 h-20 max-w-[60px] rounded-full object-contain' />

                    {/* name section */}
                    <div className='flex flex-col gap-1'>
                        <p className='text-white'>Cholate Vanilla</p>
                        <p className='font-semibold'>$8.7</p>
                    </div>

                    {/* button section */}
                    <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                        <motion.div whileTap={{scale:0.75}}>
                            <BiMinus/>
                        </motion.div>
                            <p className='w-5 h-5 rounded-sm bg-gray-400 flex items-center text-white justify-center'>0</p>
                        <motion.div whileTap={{scale:0.75}}>
                           <BiPlus/> 
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* carts total section */}
            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
                <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$ 45</p>
                </div>
                <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Delivery</p>
                <p className="text-gray-400 text-lg">$ 2.5</p>
                </div>

                <div className="w-full border-b border-gray-600 my-2"></div>

                <div className="w-full flex items-center justify-between">
                <p className="text-gray-200 text-xl font-semibold">Total</p>
                <p className="text-gray-200 text-xl font-semibold">
                    $45
                </p>
                </div>

                <motion.button
                    whileTap={{ scale: 0.8 }}
                    type="button"
                    className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
                    Check Out
                </motion.button>

                <motion.button
                    whileTap={{ scale: 0.8 }}
                    type="button"
                    className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
                    Login to check out  
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default CartContainer
