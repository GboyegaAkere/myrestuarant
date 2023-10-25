import React from 'react'
import HomeContainer from './HomeContainer'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import { useStateValue } from '../context/StateProvider';
import CartContainer from './CartContainer';


const MainContainer = () => {
  const [{foodItems,cartShow}, dispatch] = useStateValue()

  return (
    <div>
      <HomeContainer/>
      <section className=' w-full my-8'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor'>Our Fresh & Healthy Pizzas</p>
          <div className='hidden md:flex flex-row items-center gap-4'>
           <motion.div whileTap={{scale:0.75}}  className='w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-800 transition-all ease-in-out'><FiChevronLeft/></motion.div>
           <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center cursor-pointer hover:bg-orange-800 transition-all ease-in-out'><FiChevronRight/></motion.div>
          </div>
        </div>
        <motion.hr whileHover={{scale:0.85}} className='w-[130px] h-2 bg-orange-500 rounded-lg'></motion.hr>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category == "pizza")}
          />
        </div>
        <MenuContainer/>
        {cartShow &&  (
          <CartContainer/>
        )}
      </section>
    </div>
    
   
  )
}

export default MainContainer