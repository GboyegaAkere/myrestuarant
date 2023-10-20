import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { IoFastFood } from "react-icons/io5";
import { categories } from '../utils/data';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
   


const MenuContainer = () => {
  const [filter, setFilter] = React.useState("chicken")
  const [{foodItems}, dispatch] = useStateValue()
  // useEffect = (()=>{

  // },[])

  return (
    <section className=' w-full my-8' id='menu'>
        <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingColor'>Our hot dishes</p>
        </div>
        <motion.hr whileHover={{scale:0.85}} className='w-[130px] h-2 bg-orange-500 rounded-lg'></motion.hr>
        <div className='w-full flex items-center justify-start lg:justify-center gap-8 mt-6 py-6 overflow-x-scroll '>
          {categories && categories.map((category )=>(
            <motion.div whileTap={{scale:0.6}} onClick={()=>setFilter(category.urlParamName)} key={category.id} className={`group ${filter === category.urlParamName ? " bg-red-500" : " bg-white"} w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150    hover:bg-red-500`}>
              <div className={`w-10 h-10 rounded-full ${filter === category.urlParamName ? " bg-white" : " bg-red-500"} group-hover:bg-white flex items-center justify-center`}>
                <IoFastFood className='text-white group-hover:text-gray-400 text-lg'/>
              </div>
              <p className='text-sm text-gray-600 group-hover:text-white'>{category.name}</p>
            </motion.div>
          ))}
        </div>
        <div className='w-full' >
            <RowContainer flag={false} data={foodItems?.filter((n)=>n.category == filter)}/>
        </div>
    </section>
  )
}

export default MenuContainer