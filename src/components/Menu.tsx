"use client"
import menu from '@/../public/menu-bar.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Menu() {

    const [open, setOpen] = useState(false);
    const router = useRouter()

    const routeHandler = (route: string) => {
        router.push(route)
        setOpen(false)
    }



    return (
        <div className=' z-20'>
            {/* <MenuIcon size={3/0} className=' cursor-pointer' onClick={() => setOpen((prev) => !prev)} /> */}
            <Image className=' cursor-pointer' src={menu} height={35} alt='cart' onClick={() => setOpen((prev) => !prev)} />


            <div className={`absolute bg-[#030d15] text-white left-0 top-20 ${!open && 'scale-y-0'} w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 duration-300`}>
                <button onClick={() => routeHandler('/')}>Home</button>
                <button onClick={() => routeHandler('/list')}>Shop</button>
                <button onClick={() => routeHandler('/deals')}>Deals</button>
                <button onClick={() => routeHandler('/about')}>About</button>
                <button onClick={() => routeHandler('/contact')}>Contact</button>
                <button onClick={() => routeHandler('/cart')}>Cart(1)</button>
            </div>



        </div>
    )
}
