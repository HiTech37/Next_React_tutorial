import '@/app/ui/globals.css'
import { inter } from './ui/fonts'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}