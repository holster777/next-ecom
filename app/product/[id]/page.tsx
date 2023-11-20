import formatPrice from "@/util/priceFormat"
import Image from "next/image"
import { SearchParamsType } from "@/types/SearchParamsType"

export default async function ProductPage({ searchParams }: SearchParamsType){

    return (
        <div className="px-9 lg:px-16 py-16">
            <div className="grid grid-cols-3 gap-9 lg:gap-16">
            <div className="bg-white p-4 col-span-1">
                <Image src={searchParams.image} alt={searchParams.name} width={600} height={900} className="w-full" />
            </div>
            <div className="flex flex-col col-span-2 py-16">
                <h1 className="text-black text-4xl mb-3">{searchParams.name}</h1>
                <p className="my-5 w-3/4 text-md">{searchParams.description}</p>
                <p className="text-black font-semibold text-lg">{searchParams.unit_amount && formatPrice(searchParams.unit_amount)}</p>
            </div>
            
            </div>
        </div>
    )
}