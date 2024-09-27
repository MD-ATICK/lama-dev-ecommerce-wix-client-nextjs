import logo from '@/../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './Menu'

export default function NavbarMobile() {
    return (
        <div className=" md:hidden container mx-auto relative px-[2vw] flex items-center justify-between h-full">
            <Link href={'/'} className="flex gap-x-2 items-center">
                <Image src={logo} width={24} alt="" />
                <h1 className='font-semibold text-2xl tracking-wide'>LAMA</h1>
            </Link>
            <Menu />
        </div>
    )
}
