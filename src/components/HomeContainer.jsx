import React from 'react'
import Delivery from "../img/delivery.png"
import HeroBg from "../img/heroBg.png"
import C3 from "../img/c3.png"
import { heroData } from '../utils/data'

const HomeContainer = () => {

  return (
    <>
    
    <div className='hidden md:grid grid-cols-2 gap-2 mt-2 w-full'>
    <div className=' flex items-start flex-col justify-center'>
      <div className='bg-yellow-300  flex flex-row items-center p-2 rounded-lg gap-2'>
        <p>Bike Delivery</p>
        <div className='w-8 h-8 overflow-hidden bg-white  rounded-full'>
         <img src={Delivery} alt="delivery " />
        </div>
      </div>

      <div className='mt-4'>
        <p className='text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide'>The Fastest Delivery In <span className='text-green-300'>the City</span></p>
      </div>
      <p className='flex flex-start justify-center'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Nam sint tenetur modi iste perferendis, deleniti neque excepturi
        assumenda fugiat culpa ipsa, veniam numquam asperiores dolore cum nobis quae aperiam autem?
      </p>
      <div className='bg-yellow-300 mt-4 p-2 rounded-lg'>
        <button>Order Now</button> 
      </div>
      
    </div>

    <div className='flex items-end flex-col relative '>
      <div className='w-80 h-80'>
       <img src={HeroBg} alt="" />
      </div>
      <div className='w-full h-full 
        absolute top-0 left-0 
        items-center justify-center 
        px-32 py-4  flex-wrap grid grid-cols-2 gap-5'>
        {
          heroData && heroData.map(item=>(
            <div key={item.id} className='w-190 p-10  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col '>
              <img src={item.image} alt='cate' className='w-40 -mt-20 '/>
              <p className=' text-xs md:text-base font-semibold text-textColor mt-4'>{item.name}</p>
              <p className='text-xs md:text-sm text-gray-500 font-semibold my-3'>{item.description}</p>
              <p className='text-sm font-semibold  text-headingColor'>{item.price}</p>
            </div>
          ))
        }
       </div>
    </div>
   </div>

          {/* This is for Mobile */}
   <div className='grid grid-rows-2 gap-2 mt-2 w-full md:hidden'>
      <div className=' flex items-start flex-col justify-center'>
          <div className='bg-yellow-300  flex flex-row items-center p-2 rounded-lg gap-2'>
            <p>Bike Delivery</p>
            <div className='w-8 h-8 overflow-hidden bg-white  rounded-full'>
            <img src={Delivery} alt="delivery " />
            </div>
          </div>

          <div className='mt-4'>
            <p className='text-[2.5rem] md:text-[4.25rem] font-bold tracking-wide'>The Fastest Delivery In <span className='text-green-300'>the City</span></p>
          </div>
          <p className='flex flex-start justify-center'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Nam sint tenetur modi iste perferendis, deleniti neque excepturi
            assumenda fugiat culpa ipsa, veniam numquam asperiores dolore cum nobis quae aperiam autem?
          </p>
          <div className='bg-yellow-300 mt-4 p-2 rounded-lg w-full flex justify-center'>
            <button>Order Now</button> 
          </div>
          
      <div className='flex items-end flex-col mt-6'>
          <div className='w-full h-80'>
             <img src={HeroBg} alt="" />
          </div>

          <div className=' grid grid-cols-2 pl-1 gap-2 -mt-10 px-2'>
            {
              heroData && heroData.map(item=>(
                <div key={item.id} className='w-38 p-10  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col mb-10 -pb-4'>
                  <img src={item.image} alt='cate' className='w-40 -mt-20 '/>
                  <p className=' text-xs md:text-base font-semibold text-textColor mt-4'>{item.name}</p>
                  <p className='text-xs md:text-sm text-gray-500 font-semibold my-3'>{item.description}</p>
                  <p className='text-sm font-semibold  text-headingColor'>{item.price}</p>
                </div>
              ))
            }
            

            {/* <div className='w-40 p-10  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col '>
              <img src={C3} alt='cate' className='w-40 -mt-20 '/>
              <p className=' text-xs md:text-base font-semibold text-textColor mt-4'>rice</p>
              <p className='text-xs md:text-sm text-gray-500 font-semibold my-3'>cooked</p>
              <p className='text-sm font-semibold  text-headingColor'>#400</p>
            </div>

            <div className='w-40 p-10  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col '>
              <img src={C3} alt='cate' className='w-40 -mt-20 '/>
              <p className=' text-xs md:text-base font-semibold text-textColor mt-4'>rice</p>
              <p className='text-xs md:text-sm text-gray-500 font-semibold my-3'>cooked</p>
              <p className='text-sm font-semibold  text-headingColor'>#400</p>
            </div>

            <div className='w-40 p-10  bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col '>
              <img src={C3} alt='cate' className='w-40 -mt-20 '/>
              <p className=' text-xs md:text-base font-semibold text-textColor mt-4'>rice</p>
              <p className='text-xs md:text-sm text-gray-500 font-semibold my-3'>cooked</p>
              <p className='text-sm font-semibold  text-headingColor'>#400</p>
            </div> */}
         </div>

          
     
    </div>
      </div>
   </div>

  </>
  )
}

export default HomeContainer