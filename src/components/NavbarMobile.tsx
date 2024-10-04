import logo from '@/../public/favicon.ico'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'
const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false })


export default function NavbarMobile() {
    return (
        <div className=" md:hidden container mx-auto relative px-[2vw] flex items-center justify-between h-full">
            <Link href={'/'} className="flex gap-x-2 items-center">
                <Image src={logo} width={30} alt="" />
                <h1 className='font-bold text-xl tracking-wide'>ShopNifty</h1>
            </Link>
            <div className='flex items-center gap-x-4'>
                <Menu />
                <NavIcons />
            </div>
        </div>
    )
}
