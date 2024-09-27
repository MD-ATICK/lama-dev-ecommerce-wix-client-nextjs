import women from '@/../public/woman.png';
import Image from "next/image";

export default function Campaign() {
    return (
        <div className="px-4 h-64 flex justify-between bg-[#00d0ff9a]">
            <div className="  w-2/3 flex flex-col justify-center items-center">
                <h1 className=' font-bold text-3xl'>Grab Up to 50% off on Selected Products</h1>
                <button className=' bg-bitDarkSky font-medium text-sm text-white py-2 px-6 mt-4 rounded-full'>Buy Now</button>
            </div>
            <div className=" relative w-1/3">
                <Image src={women} fill className=" object-contain" alt="" />
            </div>
        </div>
    )
}
