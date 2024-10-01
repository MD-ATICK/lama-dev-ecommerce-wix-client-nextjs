"use client"
import cart from '@/../public/cart.png';
import cartoon from '@/../public/cartoon.jpg';
import { useWixClient } from '@/hooks/useWixClient';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavIcons() {

  const router = useRouter()
  const [contentShow, setContentShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const wixClient = useWixClient()
  const isLoggedIn = wixClient.auth.loggedIn()
  console.log({isLoggedIn})

  const handleItemClick = async (route: string) => {
    if (route === 'logout') {
      setIsLoading(true)
      Cookies.remove('refreshToken')
      const { logoutUrl } = await wixClient.auth.logout(window.location.href)
      router.push(logoutUrl)
      setIsLoading(false)
      setContentShow(false)
      return;
    }
    setContentShow(false)
    router.push(`/${route}`)
  }


  const popoverRef = useRef<HTMLDivElement>(null);

  // todo : learn how this work;
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setContentShow(false);
      }
    };

    // Add event listener to detect clicks outside the popover
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Remove event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popoverRef]);

  return (
    <div className='relative'>
      {/* TRIGGER */}
      {isLoading &&
        <p className=' text-sm'>loading...</p>
      }
      {
        !isLoggedIn &&
        <div className=' flex items-center gap-x-3'>
          <Link href={'/login'} className=' px-5 py-[10px] font-medium text-sm bg-sky-700 hover:bg-sky-600 rounded-md' onClick={() => router.push('/login')}>
            Login
          </Link>
          <Link href={'/cart'} className=' text-center p-2 rounded-md w-full  relative duration-300'>
            {/* <ShoppingBag size={20} /> */}
            <Image src={cart} height={30} alt='cart' />
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute -top-0 -right-[6px]'>1</span>
          </Link>
        </div>
      }
      {
        isLoggedIn &&
        <div className=' flex items-center gap-x-2'>
          <Image onClick={() => setContentShow(!contentShow)} src={cartoon} width={40} className=' cursor-pointer shadow-lg rounded-full border-2 border-bitDarkSky' alt='' />
          {/* <button className=' text-center p-2 rounded-md w-full  relative duration-300'>
            <Bell />
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute top-0 -right-[4px]'>1</span>
          </button> */}
          <Link href={'/cart'} className=' text-center p-2 rounded-md w-full  relative duration-300'>
            {/* <ShoppingBag size={20} /> */}
            <Image src={cart} height={30} alt='cart' />
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute -top-0  -right-[6px]'>1</span>
          </Link>
        </div>
      }

      {/* CONTENT */}
      {
        contentShow &&
        <div ref={popoverRef} className=' p-2 shadow-lg z-50 bg-white text-black absolute top-12 right-12  font-semibold text-sm rounded-lg w-[140px]'>
          <button className=' text-center p-2 relative rounded-md w-full hover:bg-gray-300 duration-300'>
            Notifications
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute top-0 right-0'>1</span>
          </button>
          <button onClick={() => handleItemClick('profile')} className=' text-center p-2 rounded-md w-full hover:bg-gray-300 duration-300'>Profile</button>
          <button onClick={() => handleItemClick('logout')} className=' text-center p-2 text-red-500 rounded-md w-full hover:bg-red-100 duration-300'>Logout</button>
        </div>
      }
    </div >
  )
}
