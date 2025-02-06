import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavigationMenu } from '@/components/navigation-menu'
import type React from 'react' // Added import for React
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'
import { StoryblokProvider } from '@/components/StoryblokProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simple Website',
  description: 'A simple website with navigation',
}

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <StoryblokProvider>
      <html lang='en'>
        <body className={inter.className}>
          <NavigationMenu />
          <main className='container mx-auto px-4 py-8'>{children}</main>
        </body>
      </html>
    </StoryblokProvider>
  )
}
