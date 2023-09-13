import React from 'react'
import Logo from "../img/logo.png"
import Avatar from "../img/avatar.png"
import { BsCartFill } from 'react-icons/bs';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {
    const [active, setActive] = React.useState(false)

    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [{user}, dispatch] = useStateValue()
    

    const login = async () => {
       const {user:{refreshToken, providerData}} = await
       signInWithPopup(firebaseAuth,provider)
       dispatch({
        type:actionType.SET_USER,
        user:providerData[0]
       })
       setActive(!active)
      
    }

  return (
    <div className='fixed z-50 w-screen bg-primary p-6 px-16 md:shadow-lg'>
        <div className='hidden md:flex flex-row items-center '>
            <div className='flex flex-row items-center gap-2'>
                <img src={Logo} alt="logo" className='h-10 w-10' />
                <p>Gboye's Kichen</p>
            </div>
            <div className='ml-auto flex flex-row items-center'>
                <ul className='flex flex-row gap-2'>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Service</li>
                    <li>About</li>
                </ul>
                <div className='flex flex-row items-center gap-4 ml-10 '>
                    <BsCartFill className='w-6 h-6'/>
                    <div className='relative'>
                        <img src={user? user.photoURL:Avatar} alt="" className='h-10 w-10 rounded-full' onClick={login} />
                        {active &&(
                        <div className='absolute top-10 -left-8 bg-slate-200 mt-2 py-2 px-2 rounded-lg'>
                            <p>Additems</p>
                            <ul className='flex flex-col gap-2'>
                                <li>Home</li>
                                <li>Menu</li>
                                <li>Service</li>
                                <li>About</li>
                            </ul>
                            <p>Logout</p>
                        </div> 
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    
        <div className='flex flex-row items-center justify-between md:hidden'>
        <BsCartFill className='w-6 h-6'/>
        <div className='flex flex-row items-center'>
            <img src={Logo} alt="logo" className='h-10 w-10' />
            <p>Gboyes Kichen</p>
        </div>
            <div className='relative'>
                <img src={Avatar} alt="" className='h-10 w-10' onClick={login}/>
                {active && (
                <div className='absolute top-10 -left-8 bg-slate-200 mt-2 py-2 px-2 rounded-lg'>
                    <p>Additems</p>
                    <ul className='flex flex-col gap-2'>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Service</li>
                        <li>About</li>
                    </ul>
                    <p>Logout</p>
                </div> 
                )}
            </div>
        </div>

    </div>
  )
}

export default Header