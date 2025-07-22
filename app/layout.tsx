import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Safiri - The Better Way to Send Money',
  description: 'Send money internationally with ease using Safiri. International payments using just USSD codes.',
  keywords: 'money transfer, international payments, USSD, remittance, Africa',
  authors: [{ name: 'Safiri' }],
  viewport: 'width=device-width, initial-scale=1',

   icons: {
    icon: '/Logo-icon.svg',
    shortcut: '/Logo-icon.svg',
    apple: '/Logo-icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}