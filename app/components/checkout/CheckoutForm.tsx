'use client'

import { useState, useEffect } from 'react'
import { PaymentElement, useStripe, useElements} from '@stripe/react-stripe-js'
import formatPrice from '@/util/priceFormat'
import { useCartStore } from '@/store'

export default function CheckoutForm({clientSecret}: {clientSecret: string}){

    const stripe = useStripe()
    const elements = useElements()

    const [isLoading, setIsLoading] = useState(false)
    const cartStore = useCartStore()

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity!
    }, 0)

    const formattedPrice = formatPrice(totalPrice)


    useEffect(() => {
        if (!stripe) {
            return
        }
        if (!clientSecret) {
            return
        }
    }, [stripe])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!stripe || !elements) {
            return
        }

        setIsLoading(true)

        stripe.confirmPayment({
            elements,
            redirect: 'if_required'
        })
        .then((result) => {
            if (!result.error) {
                cartStore.setCheckout("success")
            }
            setIsLoading(false)
        })
    }



    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement className="my-7" id="payment-element" options={{ layout:"tabs" }} />
            <h2 className="font-sembold text-xl">Total: {formattedPrice} </h2>
            <button className="bg-black px-5 py-2 w-full text-white mt-7 disabled:opacity-50" id="submit" disabled={isLoading || !stripe || !elements}>
                    {isLoading ? <span>Processing </span> : <span>Pay Now</span>}
            </button>
        </form>
    )
}