import Image from 'next/image'

export default function CartCard() {
    return (
        <div className="flex items-center h-32 justify-between">
            <div className="flex items-start h-full gap-x-6">
                <div className=" relative h-full w-32">
                    <Image fill sizes="200px" className=" rounded-md object-cover" src={'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt="" />
                </div>
                <div className="flex flex-col justify-between h-full ">
                    <div>
                        <h2 className=" font-semibold">Product Name</h2>
                        <p className=" text-green-500 text-sm">available</p>
                        {/* <p className=" text-red-400 text-sm">out of stock</p> */}
                    </div>
                    <p className=" font-bold text-3xl">$100</p>
                    <p className=" text-gray-400 text-sm">Quantity: 1</p>
                    <div>
                    </div>
                </div>
            </div>
            <button className=" aspect-square text-sm font-medium px-3 h-10 rounded-md ring-1 ring-sky-700 hover:bg-sky-700  duration-150 text-sky-500 hover:text-white flex justify-center items-center">
               Delete
            </button>
        </div>
    )
}
