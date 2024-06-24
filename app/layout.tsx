import type { Metadata } from 'next'
import Container from './ui/container'
import './globals.css'
import { Arsenal, Outfit, Righteous, Roboto } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Gereja Imanuel Bung Karno',
  description: 'GPIIB landing page',
}

const outfit = Outfit({ weight: '400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
