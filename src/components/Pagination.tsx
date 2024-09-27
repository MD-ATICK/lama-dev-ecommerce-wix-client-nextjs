"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

interface props{
    currentPage : number,
    hasPrev : boolean,
    hasNext : boolean,
}
export default function Pagination({ currentPage, hasPrev, hasNext} : props) {

    
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const { replace } = useRouter()

    const createPageUrl = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', String(pageNumber))
        replace(`${pathName}?${params.toString()}`)
    }


  return (
    <div className=" flex justify-between items-center font-medium mt-12 w-full">
       <button onClick={() => createPageUrl(currentPage - 1)} disabled={!hasPrev} className={` ${!hasPrev && 'opacity-50'} py-3 px-8 hover:bg-sky-500 shadow-lg rounded-md bg-sky-600 text-white`} >Prev</button>
       <button onClick={() => createPageUrl(currentPage +1)} disabled={!hasNext} className={` ${!hasNext && 'opacity-50'} py-3 px-8 hover:bg-sky-500 shadow-lg rounded-md bg-sky-600 text-white`} >Next</button>
    </div>
  )
}
