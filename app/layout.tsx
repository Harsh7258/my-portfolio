import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Provider from './components/Provider';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} layout`}>
        <Provider>
          <Navbar />
          <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4'>
            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}
