import type { Metadata } from 'next'
import { popins } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neon',
  description: 'Neon serves for creating, adding and sharing posts ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${popins.className} antialiased font-normal`}>{children}</body>
    </html>
  )
}
