import facebook from '@/../public/facebook.png';
import logo from '@/../public/logo.png';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className=" p-20 bg-bitDarkSky">
      <div className=' container mx-auto'>
        {/* TOP - main footer content */}
        <div>
          {/* LEFT */}
          <div className=" w-full md:w-2/4 lg:w-1/4 flex flex-col gap-y-6">
            <Link href={'/'} className="flex gap-x-2 items-center">
              <Image src={logo} width={24} alt="" />
              <h1 className='font-semibold text-2xl tracking-wide'>LAMA</h1>
            </Link>
            <p className=' text-sm text-gray-400  font-medium'>3525 Winding Way, Central Plaza, Willowbrook, CA 564, United States</p>
            <span className=' font-medium'>hello@gmail.com</span>
            <span className=' text-sm font-medium'>+5 525 525 252</span>
            <div className=' flex gap-3 bg-white rounded-full p-2 w-fit justify-center items-center'>
              <Image src={facebook} width={20} alt="" />
              <Image src={facebook} width={20} alt="" />
              <Image src={facebook} width={20} alt="" />
              <Image src={facebook} width={20} alt="" />
              <Image src={facebook} width={20} alt="" />

            </div>
          </div>
          {/* CENTER */}
          <div className=" w-2/4"></div>
          {/* RIGHT */}
          <div className=" w-1/4"></div>
        </div>


        {/* BOTTOM - copyright text*/}
        <div></div>
      </div>
    </div>
  )
}
