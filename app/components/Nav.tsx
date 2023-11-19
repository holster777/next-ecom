'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'
import Image from 'next/image'


export default function Nav({ user }: Session ) {
    return (
        <nav className="flex justify-between items-center px-9 py-9">
            <h1>Maea Studio</h1>
            <ul className="flex items-center gap-12">
                {!user && (
                    <li className="bg-teal-600 text-white px-4 py-2 rounded-md">
                        <button onClick={() => signIn()}>
                            Sign In
                        </button>
                    </li>
                )}
                {user && (
                    <li>
                        <Image src={user?.image as string} alt={user.name as string} width={48} height={48} className="rounded-full" />
                    </li>
                )} 
            </ul>
        </nav>
    )
}