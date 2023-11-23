'use client'

import Link from "next/link"
import { useEffect } from 'react'
import { useCartStore } from "@/store"

export default function OrderConfirmed() {

    const cartStore = useCartStore()

    useEffect(() => {

        cartStore.setPaymentIntent('')
        cartStore.clearCart()

    }, [])

    const goToOrders = () => {
        setTimeout(() => {
            cartStore.setCheckout("cart")
        }, 1000)
        cartStore.toggleCart()
    }



return (

    <div className="flex flex-col">
        <h2 className="font-semibold text-xl">Order Complete</h2>
        <p>Check your email for the confirmation receipt</p>
        <Link onClick={() => goToOrders()} href="/orders">My Orders</Link>
    </div>

)
}