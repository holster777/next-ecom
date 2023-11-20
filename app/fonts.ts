import { Inter } from 'next/font/google'
import { Bitter } from 'next/font/google'
import { DM_Serif_Display } from 'next/font/google'

export const inter = Inter({subsets: ['latin']})
export const bitter = Bitter({weight: ['400', '500', '600'], subsets: ['latin']})
export const dmSerif = DM_Serif_Display({weight: ['400'], style: ['normal', 'italic'], subsets: ['latin']})