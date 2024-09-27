import { wixClientServer } from "@/lib/winClientServer";
import CategoryCard from "./CategoryCard";

export default async function CategoryList() {

    const wixClient = await wixClientServer()
    const categories = await wixClient.collections.queryCollections().find()

    return (
        <div className=" px-4 hideScrollbar overflow-x-scroll">
            <div className=" flex gap-4 md:gap-6">
                {
                    categories.items.map(item => (
                        <CategoryCard key={item._id} category={item} />
                    ))
                }
            </div>
        </div>
    )
}
