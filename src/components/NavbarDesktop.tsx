import logo from '@/../public/favicon.ico';
import dynamic from 'next/dynamic';
import Image from "next/image";
import Link from "next/link";
import SearchBar from './SearchBar';

// import NavIcons from './NavIcons'; 

const NavIcons = dynamic(() => import('./NavIcons'), { ssr: false })

export default function NavbarDesktop() {
  return (
    <div className=" hidden md:flex items-center container mx-auto px-[3vw] justify-between gap-8 h-full">
      {/* LEFT */}
      <div className="w-2/3 flex items-center gap-x-[4vw]">
        <Link href={'/'} className="flex gap-x-2 items-center">
          <Image src={logo} width={30} alt="" />
          <h1 className='font-bold text-xl tracking-wide'>ShopNifty</h1>
        </Link>
        <div className={`flex text-sm md:hidden lg:flex font-medium items-center gap-x-3 text-gray-400`}>
          <Link className=' hover:text-white duration-300' href={'/'}>Home</Link>
          <Link className=' hover:text-white duration-300' href={'/list'}>Shop</Link>
          <Link className=' hover:text-white duration-300' href={'/deals'}>Deals</Link>
          <Link className=' hover:text-white duration-300' href={'/about'}>About</Link>
          <Link className=' hover:text-white duration-300' href={'/contact'}>Contact</Link>
          <Link className=' hover:text-white duration-300' href={'/cart'}>Cart(1)</Link>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-2/3 flex items-center justify-between gap-8">
        <SearchBar />
        <NavIcons />
      </div>
    </div>
  )
}
