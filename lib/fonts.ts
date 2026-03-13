import { Bebas_Neue, Montserrat } from 'next/font/google'

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
