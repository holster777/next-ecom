import { ProductType } from "@/types/ProductType"
import formatPrice from "@/util/priceFormat"
import Image from "next/image"
import Link from "next/link"


export default function Product({name, image, unit_amount, id, description}: ProductType) {
    return (
        <Link href={{pathname: `/product/${id}`, query: { name, image, unit_amount, id, description }}}>
        <div className="flex flex-col">
            <div className="bg-white p-4">
                <Image src={image} alt={name} width={600} height={900} className="w-full" />
            </div>
            <h1 className="text-lg font-bold mt-5 mb-3">{name}</h1>
            <p>{unit_amount && formatPrice(unit_amount)}</p>
        </div>
        </Link>
    )
}