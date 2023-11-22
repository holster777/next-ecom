import formatPrice from "@/util/priceFormat"
import Image from "next/image"
import { SearchParamsType } from "@/types/SearchParamsType"
import { getProductById } from "@/util/stripe/products"
import AddToCart from "../AddToCart"

export default async function ProductPage({ searchParams }: SearchParamsType){

    const product = await getProductById(searchParams.id)

    return (
        <div className="px-9 lg:px-16 py-16">
            <div className="grid lg:grid-cols-3 gap-10">
            <div className="bg-white p-4 lg:col-span-1">
                <Image src={product.image} alt={product.name} width={600} height={900} className="w-full" />
            </div>
            <div className="flex flex-col lg:col-span-2 lg:py-16 lg:px-5">
                <h1 className="text-black text-2xl font-semibold lg:text-4xl">{product.name}</h1>
                <p className="my-5 lg:w-3/4 text-md">{product.description}</p>
                <p className="text-black font-semibold text-lg">{product.unit_amount && formatPrice(product.unit_amount)}</p>
                <div className="flex flex-col mt-7">
                    <div className="flex justify-between items-center border-b border-black pb-2">
                    <h3 className="font-semibold uppercase">Ingredients</h3>
                    <p className="text-lg">+</p>
                    </div>
                    
                    <p className="text-black py-4">{product.metadata.ingredients}</p>
                </div>
                <AddToCart {...product}/>
            </div>
            
            </div>
        </div>
    )
}