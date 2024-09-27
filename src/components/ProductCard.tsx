import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";


interface props {
    product: products.Product
}
const image1 = 'https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const image2 = 'https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600'


export default function ProductCard({ product }: props) {

    const productDesc = product.additionalInfoSections?.find(section => section.title === 'shortDesc')?.description || ""

    return (
        <Link href={`/${product.slug}`} className=" w-full flex flex-col gap-4 sm:w-[47%] md:w-[30%] xl:w-[23%]">
            {/* PRODUCT IMAGE */}
            <div className=" relative w-full aspect-square">
                <Image src={product.media?.mainMedia?.image?.url || image1}
                    fill
                    sizes="300px"
                    alt=""
                    className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
                />
                {
                    product.media?.items &&
                    <Image src={product.media?.items[1]?.image?.url || image2}
                        fill
                        sizes="300px"
                        alt=""
                        className="absolute object-cover rounded-md"
                    />
                }
            </div>
            {/*  PRODUCT CONTENT */}
            <div className=" px-1 w-full">
                <div className=" flex justify-between">
                    <span className=" font-medium">{product?.name}</span>
                    <span className=" font-semibold">${product.price?.price}</span>
                </div>
                {
                    product.additionalInfoSections &&
                    <div className=" text-sm text-gray-400 font-medium" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(productDesc) }} />
                }
            </div>
            <button className=" mt-1 w-[50%] rounded-full ring-1 ring-sky-800  text-sm text-sky-500 py-[6px] px-4 text-center hover:bg-sky-800 hover:text-white duration-300  ">Add to Cart</button>
        </Link>
    )
}
