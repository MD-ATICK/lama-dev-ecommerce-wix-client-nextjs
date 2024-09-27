import CartCard from "@/components/CartCard";
import CheckOut from "@/components/CheckOut";

export default function CartPage() {

  return (
    // change on md
    <div className=" py-10 container mx-auto">
      <h1 className=" text-xl mb-8 font-semibold">Shopping Cart</h1>
      <div className=" flex items-start flex-col md:flex-row gap-8">
        {/* Your Carts Here */}
        <div className=" w-full md:w-2/3 space-y-4">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        {/* your checkout here */}
        <div className=" w-full rounded-lg p-6 md:w-1/3 bg-white text-black md:sticky md:top-10">
          <CheckOut />
        </div>

      </div>
    </div>
  )
}
