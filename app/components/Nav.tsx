'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { dmSerif } from '../fonts'


export default function Nav({ user }: Session ) {
    return (
        <nav className="flex justify-between items-center px-9 lg:px-16 py-9 border-b border-black">
            <Link href="/"><h1 className={`${dmSerif.className} antialiased text-3xl text-black`}>maeaSkin</h1></Link>
            <ul className="flex items-center gap-12">
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
        </nav>
    )
}