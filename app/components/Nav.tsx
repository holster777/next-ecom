'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { dmSerif } from '../fonts'
import Cart from './checkout/Cart'
import { useCartStore } from '@/store'
import { AiFillShopping } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'


export default function Nav({ user }: Session ) {

    const cartStore = useCartStore()
    return (
        <nav className="px-9 lg:px-16 py-9 border-b border-black">
            <div className="grid grid-cols-3 items-center justify-between">
            <div className="hidden lg:block">
                <ul className="flex gap-9 font-sm uppercase font-medium">
                    <li className="hover:opacity-60">
                        Blog
                    </li>
                    <li className="hover:opacity-60" >
                        Our Mission
                    </li>
                    <li className="hover:opacity-60">
                        Shop
                    </li>
                </ul>
            </div>
            {/* TODO: MOB NAV */}
            <div className="lg:hidden text-4xl">
                =
            </div>
            <div className="flex justify-center">
                <Link href="/"><h1 className={`${dmSerif.className} antialiased text-3xl text-black`}>maeaSkin</h1></Link>
            </div>
            <div>
                <ul className="flex items-center justify-end gap-12">
                    <li className="flex items-center text-3xl relative cursor-pointer" onClick={() => cartStore.toggleCart()}>
                        <AiFillShopping />
                        <AnimatePresence>
                            {cartStore.cart.length > 0 &&
                                <motion.span animate={{scale: 1}} initial={{scale: 0}} className="bg-purple text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">{cartStore.cart.length}</motion.span>
                            }
                        </AnimatePresence>
                        </li>
                    {!user && (
                        <li className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white">
                            <button onClick={() => signIn()}>
                                Sign In
                            </button>
                        </li>
                    )}
                    {user && user.image && (
                        <li>
                            <Link href="/account">
                                <Image src={user.image} alt={user.name as string} width={36} height={36} className="rounded-full" />
                            </Link>
                        </li>
                    )} 
                </ul>
                <AnimatePresence>
                    {cartStore.isOpen && <Cart />}
                </AnimatePresence>
            </div>
            </div>

        </nav>
    )
}