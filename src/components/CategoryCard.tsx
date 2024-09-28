import { collections } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";

interface props {
    category: collections.Collection
}

export default function CategoryCard({ category }: props) {

    const image = 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


    return (
        <Link href={`/list?cat=${category.slug}`} className=" flex-shrink-0 w-[80%] rounded-md overflow-hidden sm:w-[40%] lg:w-1/4 xl:w-1/5">
            <div className=" relative bg-slate-100 w-full h-96">
                <Image src={category.media?.mainMedia?.image?.url || image}
                    fill
                    sizes="100%"
                    alt=""
                    className="object-cover rounded-md"
                />
            </div>
            <h1 className=" font-medium text-gray-200 mt-2">{category.name}</h1>
        </Link>
    )
}
