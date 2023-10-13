import React from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { BsCartFill } from 'react-icons/bs';
import {BiLogOut} from 'react-icons/bi';
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom';

const Header = () => {
    const [active, setActive] = React.useState(false)

    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{user}, dispatch] = useStateValue()
    

    const login = async () => {
       if(!user){
        const {user:{refreshToken, providerData}} = await
        signInWithPopup(firebaseAuth,provider)
        dispatch({
         type:actionType.SET_USER,
         user:providerData[0]
        })
        localStorage.setItem("user",JSON.stringify(providerData[0]))
       }else{
        setActive(!active)
       }
      }


      const logout =() => {
        setActive(false)
        localStorage.clear()
        dispatch({
            type:actionType.SET_USER,
            user:null
        })
      }

  return (
    <div className='fixed z-50 w-screen bg-white p-6 px-16 md:shadow-lg'>
        <div className='hidden md:flex flex-row items-center '>
            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                <img src={Logo} alt="logo" className='h-10 w-10' />
                <p>Gboye's Kichen</p>
            </div>
            <div className='ml-auto flex flex-row items-center'>
                <ul className='flex flex-row gap-10 cursor-pointer'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Service</li>
                    <li>About</li>
                </ul>
                <div className='flex flex-row items-center gap-4 ml-10 '>
                    <BsCartFill className='w-6 h-6'/>
                    <div className='relative'>
                        <img src={user ? user.photoURL:Avatar   } alt="profile" className='h-10 w-10 rounded-full cursor-pointer' onClick={login} />
                        {active &&(
                        <div className='absolute top-10 -left-8 bg-slate-200 mt-2 py-2 px-2 rounded-lg'>
                            {user && user.email === "akeremaleoluwagboyega@gmail.com" &&(
                                <Link to={"./createItem"}>
                                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                            <p>additem </p>
                                            <MdAdd/>
                                        </div>
                                    </div>
                                </Link>
                            )}
                            <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                <p onClick={logout}>Logout</p>
                                <BiLogOut/>
                            </div>
                        </div> 
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    
        <div className='flex flex-row items-center justify-between md:hidden'>
        <BsCartFill className='w-6 h-6'/>
        <div className='flex flex-row items-center gap-2'>
           
            <img src={Logo} alt="logo" className='h-14 w-14 ' />
            <p>Gboyes Kichen</p>
        </div>
            <div className='relative'>
                <img src={user ? user.photoURL:Avatar}  alt="profile" className='h-10 w-10 rounded-full' onClick={login}/>
                
                {active &&(
                <div className='absolute top-10 -left-8 bg-slate-200 mt-2 py-2 px-2 rounded-lg'>
                        {user && user.email === "akeremaleoluwagboyega@gmail.com" &&(
                                <Link to={"./createItem"}>
                                    <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                        <div className='flex flex-row items-center gap-2 cursor-pointer'>
                                            <p>additem </p>
                                            <MdAdd/>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        <p onClick={logout}>Logout</p>
                    </div> 
                )}
            </div>
        </div>

    </div>
  )
}

export default Header