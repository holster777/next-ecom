'use client'

import Image from 'next/image'
import { useCartStore } from '@/store'
import formatPrice from '@/util/priceFormat'
import {IoAddCircle, IoRemoveCircle } from 'react-icons/io5'
import { FaArrowLeft } from "react-icons/fa";
import { motion} from 'framer-motion'
import { RxCross2 } from "react-icons/rx";
import Checkout from './Checkout'
import OrderConfirmed from './OrderConfirmed'

export default function Cart() {
    const cartStore = useCartStore()

    const totalPrice = cartStore.cart.reduce((acc, item) => {
        return acc + item.unit_amount! * item.quantity!
    }, 0)
    
    return (
        <>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=> cartStore.toggleCart()} className="fixed w-full h-screen left-0 top-0 bg-black/25">
            <motion.div layout onClick={(e) => e.stopPropagation()} className="bg-[#F7F2EE] absolute right-0 top-0 w-full lg:w-2/5 h-screen p-12 overflow-y-scroll text-black">
                <div className="flex justify-between items-center">
                <h1 className="font-semibold text-lg">Shopping Cart</h1>
                <RxCross2 className="font-semibold text-xl" onClick={() => cartStore.toggleCart()} />
                </div>
                    {!cartStore.cart.length && cartStore.onCheckout === "cart" &&
                        <h3 className="mt-5">No items in cart</h3>
                    }

                {/* CART ITEMS */}
                {cartStore.onCheckout === "cart" && (
                    <>
                    {cartStore.cart.map((item) => (
                                    
                        <motion.div layout key={item.id} className="flex gap-x-4 my-7">
                            <Image src={item.image} alt={item.name} width={100} height={250} />
                            <div className="flex flex-col">
                                <p className="uppercase text-sm">{item.metadata.category && item.metadata.category}</p>
                                <h2 className="font-semibold">{item.name}</h2>
                                <div className="py-2">
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => cartStore.removeProduct(item)}><IoRemoveCircle/></button>
                                    <button onClick={() => cartStore.addProduct(item)}><IoAddCircle/></button>
                                </div>
                                <p>{item.unit_amount && formatPrice(item.unit_amount)}</p>
                            </div>
                        </motion.div>
                        
                    ))}
                    <motion.div layout>
                        {cartStore.cart.length > 0 && 
                        <p className="mb-5 text-lg font-semibold">Total: {formatPrice(totalPrice)}</p>
                        }
                    </motion.div>
                    <motion.div layout>
                        {cartStore.cart.length > 0 &&
                            <button onClick={() => cartStore.setCheckout('checkout')} className="bg-black text-white px-5 py-2 w-full">Checkout</button>
                        }
                    </motion.div>
                    </>
                    
                )}

                {/* CHECKOUT PAGE */}
                {cartStore.onCheckout === "checkout" && 
                <>
                <Checkout />
                <button onClick={() => cartStore.setCheckout("cart")} className="text-sm font-medium mt-7 flex gap-3 items-center"><FaArrowLeft /> Back to cart</button>
                </>
                }

                {/* ORDER CONFIRMED PAGE */}

                {cartStore.onCheckout === "success" && <OrderConfirmed />}
                
            </motion.div>
        </motion.div>
        </>
    )
}