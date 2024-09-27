
export default function CheckOut() {
    return (
        <div className=" space-y-4">
            <h1 className=" text-xl mb-8 font-bold">Checkout</h1>
            <div className="flex items-center justify-between">
                <h3 className=" font-medium">Total <span className=" text-gray-600 text-sm">(7 items)</span> </h3>
                <h2 className=" text-xl font-bold">$252</h2>
            </div>
            <div className="flex items-center justify-between">
                <h3 className=" font-medium">Shipping Fee</h3>
                <h2 className=" text-xl font-bold">+$52</h2>
            </div>
            <div className=" h-[1.5px] bg-gray-400 w-full" />
            <div className="flex items-center justify-between">
                <h3 className=" font-semibold text-lg">SubTotal</h3>
                <h2 className=" text-2xl font-bold">$302</h2>
            </div>
            <div className="flex justify-end pt-4 items-center">
              <button className="ring-1 ring-black text-black hover:bg-black font-medium duration-300 hover:text-white py-3 px-12 rounded-md">Checkout</button>
            </div>
        </div>
    )
}
