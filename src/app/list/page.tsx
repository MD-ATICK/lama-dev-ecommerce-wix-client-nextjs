import Campaign from '@/components/Campaign';
import Filter from '@/components/Filter';
import ProductList from '@/components/ProductList';
import { wixClientServer } from '@/lib/winClientServer';

export default async function ListPage({ searchParams }: { searchParams: any }) {

  const wixClient = await wixClientServer()
  const category = await (await wixClient.collections.getCollectionBySlug(searchParams.cat || 'all-products'))

  return (
    <div className="container pb-20 mx-auto">
      {/* CAMPAIGN BANNER */}
      <Campaign />
      <Filter />
      <h1 className=' font-semibold text-xl'>{category.collection?.name} For You! ({category.collection?.numberOfProducts})</h1>
      <ProductList categoryId={category.collection?._id!} searchParams={searchParams} />
    </div>
  )
}
