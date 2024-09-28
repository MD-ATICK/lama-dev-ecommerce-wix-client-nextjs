import { products } from "@wix/stores";
import Add from "./Add";
import CustomizeProducts from "./CustomizeProducts";


interface props {
    product: products.Product
}
export default function SingleProductContent({ product }: props) {


    return (
        <div className=" flex flex-col gap-4">
            <h1 className=" text-2xl font-medium">{product.name}</h1>
            <p className=" text-gray-400 text-sm font-medium">{product.description}</p>
            <div className=" h-[1.5px]  bg-sky-950" />
            {
                product.price?.price === product.price?.discountedPrice ?
                    <h2 className=" font-semibold text-2xl">${product.price?.price}</h2>
                    :
                    <div className=" flex items-center gap-3">
                        <h3 className=" text-xl line-through text-gray-500">${product.price?.discountedPrice}</h3>
                        <h2 className=" font-semibold text-2xl">${product.price?.price}</h2>
                    </div>
            }
            <div className=" h-[1.5px] bg-sky-950" />
            {
                (product.variants && product.productOptions) ?
                    (<CustomizeProducts productId={product._id!} variants={product.variants!} productOptions={product.productOptions!} />)
                    : (<Add productId={product._id!} variantId='00000000-0000-0000-0000-000000000000' stockNumber={product?.stock?.quantity || 0} />)
            }
            <div className=" h-[1.5px] bg-sky-950" />
            {
                product.additionalInfoSections?.map((section: any) => (
                    <div key={section.title} className=" text-sm font-medium">
                        <h4 className=" text-lg font-semibold mb-1">{section.title}</h4>
                        <p className=" text-gray-400">{section.description}</p>
                    </div>
                ))
            }
        </div>
    )
}
