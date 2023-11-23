'use client'

import { Session } from 'next-auth'
import { signIn } from 'next-auth/react'

export default function Orders({user}: Session){

    return (
        <div className="px-9 lg:px-16 py-16 flex flex-col gap-10">
            <h1 className="text-xl font-semibold">Account</h1>

            {user && 
            <>
            <div className="flex flex-col gap-5">
                <p>Name: {user?.name}</p>
                <p>Email: {user?.email}</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Orders</h3>
            </div>
            </>
            }

            {!user && (
                
                <button className="border border-black text-black px-4 py-2 hover:bg-black hover:text-white" onClick={() => signIn()}>
                    Sign In
                </button>
                
            )}

        </div>
    )
}