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
  const [scrollValue, setScrollValue] = React.useState(0);

  return (
    <div>
      <HomeContainer/>
      <section className=' w-full my-8'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor'>Our Fresh & Healthy Pizzas</p>
          <div className='hidden md:flex flex-row items-center gap-4'>
          <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(-200)}
            >
              <FiChevronLeft className="text-lg text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(200)}
            >
              <FiChevronRight className="text-lg text-white" />
            </motion.div>
          </div>
        </div>
        <motion.hr whileHover={{scale:0.85}} className='w-[130px] h-2 bg-orange-500 rounded-lg'></motion.hr>
        <div className="w-full">
          <RowContainer
            scrollValue={scrollValue}
            flag={true}
            data={foodItems?.filter((n) => n.category === "pizza")}
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