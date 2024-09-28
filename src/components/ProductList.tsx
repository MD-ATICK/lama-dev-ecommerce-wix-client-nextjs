import { wixClientServer } from "@/lib/winClientServer";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";

interface props {
    categoryId: string,
    limit?: number,
    searchParams?: any
}

export default async function ProductList({ categoryId, limit, searchParams }: props) {

    const LIMIT_PER_PAGE = 9
    const wixClient = await wixClientServer()

    let productQuery = wixClient.products
        .queryProducts()
        .eq('collectionIds', categoryId)
        .startsWith('name', searchParams?.name || "")
        .hasSome('productType', [searchParams?.type || 'physical', 'digital'])
        .gt('priceData.price', searchParams?.min || 0)
        .lt('priceData.price', searchParams?.max || 99999)
        .limit(limit || LIMIT_PER_PAGE)
        .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || LIMIT_PER_PAGE) : 0)
    // .find()


    if (searchParams?.sort) {
        const [sortType, sortBy] = searchParams.sort.split(" ");
        if (sortType === 'asc') {
            productQuery = productQuery.ascending(sortBy);
        }
        if (sortType === 'desc') {
            productQuery = productQuery.descending(sortBy);
        }
    }

    const res = await productQuery.find()

    return (
        <div className=" px-[2vw] ">
            <div className=" w-full mt-12 flex justify-between flex-wrap gap-x-8 gap-y-16">
                {
                    res.items.length === 0 && <p>no product found!</p>
                }
                {
                    res.items.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))
                }
            </div>
            {
                (res.hasNext() || res.hasPrev()) &&
            <Pagination currentPage={res.currentPage || 0} hasNext={res.hasNext()} hasPrev={res.hasPrev()}  />
            }
        </div>
    )
}
