"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Filter() {

    const pathName = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        replace(`${pathName}?${params.toString()}`)
    }

    return (
        <div className=" my-12 px-2 flex justify-between overflow-x-scroll py-1 hideScrollbar ">
            <div className="flex gap-2 md:gap-4 font-semibold">
                {/* SELECT OF TYPE */}
                <select
                    name="type"
                    id=""
                    onChange={handleFilterChange}
                    className=" py-2 px-4 md:py-3 md:px-6 rounded-full text-sm text-black outline-none bg-[#c2c3c4]">
                    <option value="">Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                {/* INPUT OF MIN PRICE */}
                <input type="number" onChange={handleFilterChange} name="min" placeholder="min price" className=" text-sm rounded-full px-4 w-32 ring-1 ring-[#c2c3c4] bg-transparent outline-none" />
                {/* INPUT OF MAX PRICE */}
                <input type="number" onChange={handleFilterChange} name="max" placeholder="max price" className=" text-sm rounded-full px-4 w-32 ring-1 ring-[#c2c3c4] bg-transparent outline-none" />

                {/* SELECT CATEGORY */}
                <select
                    name="cat"
                    id=""
                    onChange={handleFilterChange}
                    className=" py-2 px-4 md:py-3 md:px-6 rounded-full text-sm text-black outline-none bg-[#c2c3c4]">
                    <option value="">Category</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                <select
                    name="filter"
                    id=""
                    onChange={handleFilterChange}
                    className=" py-2 px-4 md:py-3 md:px-6 rounded-full text-sm text-black outline-none bg-[#c2c3c4]">
                    <option value="">All Filters</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                </select>
                {/* SELECT SORT BY */}
                <select
                    name="sort"
                    id=""
                    onChange={handleFilterChange}
                    className=" py-2 px-4 md:py-3 md:px-6 rounded-full text-sm text-black outline-none bg-[#c2c3c4]">
                    <option value="">Sort By</option>
                    <option value="asc price">Price (low to high)</option>
                    <option value="desc price">Price (high to low)</option>
                    <option value="asc lastUpdated">Newest</option>
                    <option value="desc lastUpdated">Oldest</option>
                </select>
            </div>
        </div>
    )
}
