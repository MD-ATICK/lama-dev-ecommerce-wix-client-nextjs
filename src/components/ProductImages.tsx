"use client"
import Image from "next/image";
import { useState } from "react";

interface props {
    items: any
}

export default function ProductImages({ items }: props) {

    // const images = [
    //     {
    //         id: 1,
    //         url: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    //     },
    //     {
    //         id: 2,
    //         url: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     },
    //     {
    //         id: 3,
    //         url: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    //     },
    //     {
    //         id: 4,
    //         url: 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600'
    //     },
    //     {
    //         id: 5,
    //         url: 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    //     },
    // ]

    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className=" h-[500px] relative">
                <Image src={items[index].image.url}
                    fill
                    sizes="50vw"
                    className=" object-cover rounded-md"
                    alt=""
                />
            </div>
            <div className="flex items-center  gap-x-3 hideScrollbar w-full overflow-x-scroll">
                {
                    items.map((item: any, index: number) => (
                        <div key={index} onClick={() => setIndex(index)} className=" hover:scale-105 duration-300 aspect-square h-32 relative gap-4 mt-8">
                            <Image src={item.image.url}
                                fill
                                sizes="20vw"
                                className=" object-cover rounded-md"
                                alt=""
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
