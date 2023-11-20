import { ProductType } from "@/types/ProductType"
import formatPrice from "@/util/priceFormat"
import Image from "next/image"
import Link from "next/link"
import { inter } from "../fonts"


export default function Product({name, image, unit_amount, id}: ProductType) {
    
    return (
        <Link href={{pathname: `/product/${id}`, query: { id }}}>
        <div className="flex flex-col">
            <div className="bg-white p-4">
                <Image src={image} alt={name} width={600} height={900} className="w-full" />
            </div>
            <h1 className={`${inter.className} antialiased text-lg font-semibold mt-5 mb-3`}>{name}</h1>
            <p>{unit_amount && formatPrice(unit_amount)}</p>
        </div>
        </Link>
    )
}