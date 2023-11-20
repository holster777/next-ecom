import formatPrice from "@/util/priceFormat"
import Image from "next/image"
import { SearchParamsType } from "@/types/SearchParamsType"
import { getProductById } from "@/pages/api/stripe/products"

export default async function ProductPage({ searchParams }: SearchParamsType){

    const product = await getProductById(searchParams.id)

    return (
        <div className="px-9 lg:px-16 py-16">
            <div className="grid grid-cols-3 gap-10">
            <div className="bg-white p-4 col-span-1">
                <Image src={product.image} alt={product.name} width={600} height={900} className="w-full" />
            </div>
            <div className="flex flex-col col-span-2 py-16 px-5">
                <h1 className="text-black text-4xl mb-3">{product.name}</h1>
                <p className="my-5 w-3/4 text-md">{product.description}</p>
                <p className="text-black font-semibold text-lg">{product.unit_amount && formatPrice(product.unit_amount)}</p>
                <div>
                    <p className="text-black">{product.metadata.ingredients}</p>
                </div>
            </div>
            
            </div>
        </div>
    )
}