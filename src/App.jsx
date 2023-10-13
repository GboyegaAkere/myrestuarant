import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import { AnimatePresence } from 'framer-motion'
import CreateItem from './components/CreateItem'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFunctions'
import { actionType } from './context/reducer'



const App = () => {
  const [{foodItems}, dispatch] = useStateValue()

  const fetchData = async () => {
    await getAllFoodItems().then((data)=>{
      dispatch({
        type:actionType.SET_FOOD_ITEMS,
        foodItems:data,
      })
    })
  }

  React.useEffect (()=>{
    fetchData()
  },[])

  return (
    <AnimatePresence>
        <div className='w-screen h-auto flex flex-col bg-white'>
          <Header/>
          <main className='mt-20 px-12 md:mt-20 p-4 w-full py-4'>
            <Routes>
              <Route path='/*' element ={<MainContainer/>}/>
              <Route path='/createitem' element={<CreateItem/>}/>
            </Routes>
          </main>
        </div>
    </AnimatePresence>
    
  )
}

export default App