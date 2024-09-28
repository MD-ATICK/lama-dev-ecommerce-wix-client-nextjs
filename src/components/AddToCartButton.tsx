// "use client"
import { products } from '@wix/stores'



interface props {
    product: products.Product,
    quantity: number
}


export default function AddToCartButton({ product, quantity }: props) {

    // const addToCart = () => {
    //     const oldCart = JSON.parse(localStorage.getItem('cart') || "[]")
    //     const find = oldCart.find((item: any) => item?._id === product._id)

    //     if (!find) {
    //         const newCart = [...oldCart, { _id: product._id, price: product.priceData?.price, name: product.name, stock: product.stock, quantity, totalPrice: Math.floor(quantity * product.priceData?.price!) }]
    //         localStorage.setItem('cart', JSON.stringify(newCart))
    //     }

    // }

    return (
        <div>
            <button  className=" mt-1 w-[50%] rounded-full ring-1 ring-sky-800  text-sm text-sky-500 py-[6px] px-4 text-center hover:bg-sky-800 hover:text-white duration-300  ">
                Add to cart
            </button>
        </div>
    )
}
