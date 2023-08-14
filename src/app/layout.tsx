import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mutasim',
  description: 'My Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
