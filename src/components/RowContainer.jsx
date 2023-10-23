import React from 'react'
import HeroBg from "../img/heroBg.png";
import Fi1 from "../img/fi1.png"
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import NotFound from "../img/NotFound.svg";

const RowContainer = ({flag, data}) => {
  return (
    <div className={`w-full my-12 flex flex-row justify-center gap-2 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}>
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                key={item?.id}
                className="w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px]  bg-pink-100 rounded-lg py-2 px-4  my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
              >
                <div className="w-full flex items-center justify-between">
                  <motion.div
                    className="w-40 h-40 -mt-8 drop-shadow-2xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    <img
                      src={item?.imageURL}
                      alt=""
                      className="w-full h-full object-contain rounded-full"
                    />
                  </motion.div>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8"
                    // onClick={() => setItems([...cartItems, item])}
                  >
                    <MdShoppingBasket className="text-white" />
                  </motion.div>
                </div>

                <div className="w-full flex flex-col items-end justify-end -mt-8">
                  <p className="text-textColor font-semibold text-base md:text-lg">
                    {item?.title}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {item?.calories} Calories
                  </p>
                  <div className="flex items-center gap-8">
                    <p className="text-lg text-headingColor font-semibold">
                      <span className="text-sm text-red-500">$</span> {item?.price}
                    </p>
                  </div>
                </div>
              </div>
            ))
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} className="h-340" />
          <p className="text-xl text-headingColor font-semibold my-2">
            Items Not Available
          </p>
        </div>
      )}
            
              
      </div>
  )
}

export default RowContainer