"use client"

import { useState } from "react";

interface props {
    productId: string,
    variantId: string,
    stockNumber: number
}

export default function Add({ productId, variantId, stockNumber }: props) {
    const [quantity, setQuantity] = useState(1);
    // const stockNumber = 4
    return (
        <div>
            <h4 className=" font-medium">Choose a quantity</h4>
            <div className=" flex items-center justify-between py-5">
                <div className="flex items-center gap-x-3 ">
                    <div className=" flex bg-gray-300 text-black h-10 rounded-full overflow-hidden w-32 items-center">
                        <button onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)} className=" cursor-pointer flex-1 hover:bg-gray-400 duration-300 h-full text-xl font-medium">-</button>
                        <p className=" font-bold text-lg px-2">{quantity}</p>
                        <button onClick={() => setQuantity(prev => prev < stockNumber ? prev + 1 : stockNumber)} className=" cursor-pointer flex-1 hover:bg-gray-400 duration-300 h-full  text-xl font-medium">+</button>
                    </div>
                    {
                        stockNumber === 0 ?
                        <div className=" text-sm text-red-500 font-medium">Out of Stock!</div>
                            :
                            <div className=" text-sm">
                                only <span className=" text-sky-500 font-medium">{stockNumber} items</span> lefts! <br /> {"Don't"} {" "} miss it
                            </div>
                    }
                </div>
                <button className=" mt-1 rounded-full ring-1 ring-sky-800  text-sm text-sky-500 py-2 px-5 font-medium text-center hover:bg-sky-800 hover:text-white duration-300  ">Add to Cart</button>
            </div>

        </div>
    )
}
