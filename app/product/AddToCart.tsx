'use client'

import { useCartStore } from "@/store";
import { AddCartType } from "@/types/AddCartType";


export default function AddToCart({name, id, image, unit_amount, quantity,}: AddCartType){

    const cartStore = useCartStore()

    return (
        <>
        <button onClick={() => cartStore.addProduct({name, id, image, unit_amount, quantity})} className="my-12 text-white bg-black py-2 px-5 font-medium">Add to cart</button>
        </>
    )
}
