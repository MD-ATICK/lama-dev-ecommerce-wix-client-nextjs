import ProductImages from "@/components/ProductImages";
import SingleProductContent from "@/components/SingleProductContent";
import { wixClientServer } from "@/lib/winClientServer";
import { notFound } from "next/navigation";


interface props {
  params: { slug: string }
}
export default async function SinglePage({ params }: props) {

  const wixClient = await wixClientServer()
  const products = await wixClient.products.queryProducts().eq('slug', params.slug).find()

  if (!products.items[0]) {
    return notFound()
  }

  return (
    <div className=" container py-10 gap-[3vw] mx-auto flex flex-col lg:flex-row px-2">
      {/* IMAGES LEFT */}
      <div className=" w-full lg:w-1/2 lg:sticky top-6 h-max">
        <ProductImages items={products.items[0].media?.items} />
      </div>
      {/* CONTENT RIGHT*/}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <SingleProductContent product={products.items[0]} />
      </div>
    </div>
  )
}
