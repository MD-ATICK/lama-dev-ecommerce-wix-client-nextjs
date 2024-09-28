'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Slider() {

    const slides = [
        {
            id: 1,
            title: 'Summer Sale Collections',
            description: "Sale! up to 50% off!",
            img: 'https://images.pexels.com/photos/28517489/pexels-photo-28517489/free-photo-of-confident-young-woman-in-stylish-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=600',
            url: '/',
            bg: 'bg-gradient-to-r from-black to-gray-100'
        },
        {
            id: 2,
            title: 'Winter Sale Collections',
            description: "Sale! up to 50% off!",
            img: 'https://images.pexels.com/photos/17084261/pexels-photo-17084261/free-photo-of-woman-in-jeans-and-black-sports-bra.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            url: '/',
            bg: 'bg-gradient-to-r from-teal-900 to-gray-100'
        },
        {
            id: 3,
            title: 'Spring Sale Collections',
            description: "Sale! up to 50% off!",
            img: 'https://images.pexels.com/photos/28517489/pexels-photo-28517489/free-photo-of-confident-young-woman-in-stylish-fashion-portrait.jpeg?auto=compress&cs=tinysrgb&w=600',
            url: '/',
            bg: 'bg-gradient-to-r from-black to-gray-100'
        },
    ]

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrent(current => (current === slides.length - 1) ? 0 : current + 1);
        }, 5000);

        return () => {
            clearInterval(interval)
        };
    }, [slides.length]);

    return (
        <div className=" h-[calc(100vh-60px)] overflow-hidden">
            {/* SLIDER CONTENT */}
            <div
                style={{ transform: `translateX(-${current * 100}vw)` }}
                className={` w-max h-full flex transition-all ease-in-out duration-1000`}>
                {slides.map(slide => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-16 md:flex-row`} key={slide.id}>
                        {/* TEXT CONTAINER */}
                        <div className=" h-1/2 md:h-full font-medium md:w-1/2 flex justify-center items-center flex-col gap-y-6">
                            <h2>{slide.description}</h2>
                            <h1 className=" text-2xl md:text-3xl lg:text-4xl text-center font-bold">{slide.title}</h1>
                            <Link href={slide.url}>
                                <button className=" bg-black rounded-sm text-sm py-2 px-4">SHOP NOW</button>
                            </Link>
                        </div>
                        {/* IMAGE CONTAINER */}
                        <div className=" h-4/5 md:h-full  md:w-1/2 relative">
                            <Image src={slide.img} fill sizes="0%" className=" object-cover" alt="" />
                        </div>
                    </div>
                ))}
            </div>

            {/* SLIDER MOVE BUTTONS */}
            <div className=" absolute m-auto left-1/2 bottom-8 flex gap-4">
                {
                    slides.map((slide, index) => (
                        <div
                            className={` w-3 aspect-square rounded-full ring-1 ring-gray-600 cursor-pointer flex justify-center items-center ${current === index && 'scale-150'}`}
                            key={slide.id}
                            onClick={() => setCurrent(index)}>
                            {current === index && (
                                <div className=" w-[6px] aspect-square bg-gray-600 rounded-full"></div>
                            )}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
