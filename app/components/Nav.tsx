'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { dmSerif } from '../fonts'


export default function Nav({ user }: Session ) {
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
                    {!user && (
                        <li className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white">
                            <button onClick={() => signIn()}>
                                Sign In
                            </button>
                        </li>
                    )}
                    {user && user.image && (
                        <li> 
                            <Image src={user.image} alt={user.name as string} width={48} height={48} className="rounded-full" />
                        </li>
                    )} 
                </ul>
            </div>
            </div>
        </nav>
    )
}