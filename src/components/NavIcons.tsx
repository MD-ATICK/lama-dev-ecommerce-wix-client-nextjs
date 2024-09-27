"use client"
import cartoon from '@/../public/cartoon.jpg';
import { Bell, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function NavIcons() {

  const router = useRouter()
  const [contentShow, setContentShow] = useState(false);
  const isLoggedIn = false

  const handleItemClick = (route: string) => {
    setContentShow(false)
    router.push(`/${route}`)
  }


  const popoverRef = useRef<HTMLDivElement>(null);

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
      {
        !isLoggedIn &&
        <div className=' flex items-center gap-x-3'>
          <Link href={'/login'} className=' px-5 py-[10px] font-medium text-sm bg-sky-700 hover:bg-sky-600 rounded-md' onClick={() => router.push('/login')}>
            Login
          </Link>
          <button className=' text-center p-2 rounded-md w-full  relative duration-300'>
            <ShoppingBag size={20} />
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute -top-1 -right-[6px]'>1</span>
          </button>
        </div>
      }
      {
        isLoggedIn &&
        <div className=' flex items-center gap-x-2'>
          <Image onClick={() => setContentShow(!contentShow)} src={cartoon} width={40} className=' cursor-pointer shadow-lg rounded-full border-2 border-bitDarkSky' alt='' />
          <button className=' text-center p-2 rounded-md w-full  relative duration-300'>
            <Bell />
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute top-0 -right-[4px]'>1</span>
          </button>
        </div>
      }

      {/* CONTENT */}
      {
        contentShow &&
        <div ref={popoverRef} className=' p-2 shadow-lg bg-white text-black absolute top-12 right-12  font-semibold text-sm rounded-lg w-[140px]'>
          <button onClick={() => handleItemClick('cart')} className=' text-center p-2 rounded-md w-full hover:bg-gray-300 duration-300'>
            Cart
            <span className=' text-xs bg-sky-600 text-white rounded-full h-4 aspect-square flex justify-center items-center absolute top-3 right-8'>1</span>
          </button>
          <button onClick={() => handleItemClick('profile')} className=' text-center p-2 rounded-md w-full hover:bg-gray-300 duration-300'>Profile</button>
          <button onClick={() => handleItemClick('login')} className=' text-center p-2 text-red-500 rounded-md w-full hover:bg-red-100 duration-300'>Logout</button>
        </div>
      }
    </div >
  )
}
