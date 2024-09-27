// "use client"  - c
import CategoryList from "@/components/CategoryList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { Suspense } from "react"

const HomePage = async () => {

  // c
  // const wixClient = useWixClient()

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find()
  //     console.log('res', res)
  //   }
  //   getProducts()
  // }, [wixClient]);
  // c

  // const wixClient = await wixClientServer()
  // const res = await wixClient.products.queryProducts().find()

  // console.log('res', res)

  return (
    <div className=''>
      {/* SLIDER */}
      <Slider />

      {/* FEATURED PRODUCT LIST */}
      <div className=" container mx-auto px-[5vw] sm:px-2 py-16">
        <h1 className=" font-bold text-3xl">Featured Product</h1>
        <Suspense fallback={'loading'}>
          <ProductList categoryId={process.env.FEATURED_PRODUCT_CATEGORY_ID!} limit={4} />
        </Suspense>
      </div>

      {/* CATEGORIES PRODUCT LIST */}
      <div className=" container mx-auto px-[5vw] space-y-6 sm:px-2 py-16">
        <h1 className=" font-bold text-3xl">Categories Product</h1>
        <Suspense fallback={'loading'}>
          <CategoryList />
        </Suspense>
      </div>

      {/* NEW PRODUCT LIST */}
      <div className=" container mx-auto px-[5vw] sm:px-2 py-16">
        <h1 className=" font-bold text-3xl">New Product</h1>
        {/* <ProductList /> */}
      </div>
    </div>
  )
}

export default HomePage