"use client"
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {

    const [open, setOpen] = useState(false);
    return (
        <div className=' z-20'>
            <MenuIcon size={30} className=' cursor-pointer' onClick={() => setOpen((prev) => !prev)} />

            <div className={`absolute bg-[#030d15] text-white left-0 top-20 ${!open && 'scale-y-0'} w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 duration-300`}>
                <Link href={'/'}>Home</Link>
                <Link href={'/'}>Shop</Link>
                <Link href={'/'}>Deals</Link>
                <Link href={'/'}>About</Link>
                <Link href={'/'}>Contact</Link>
                <Link href={'/'}>Cart(1)</Link>
            </div>

        </div>
    )
}
