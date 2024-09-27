'use client'
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function SearchBar() {

    const router = useRouter()

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name')
        if (name) {
            router.push(`/list?name=${name}`)
        }
    }

    return (
        <form className=" flex items-center justify-between gap-4 bg-bitDarkSky py-2 px-5 rounded-full text-sm font-medium flex-1" onSubmit={handleSearch}>
            <input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none" />
            {/* <Search size={18} /> */}
        </form>
    )
}
