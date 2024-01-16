
import type { Metadata } from 'next'
import './globals.css'
import { MainLayout } from '@/components'
import { Providers } from './provider'
import 'react-loading-skeleton/dist/skeleton.css'


export const metadata: Metadata = {
  title: 'Godwin Ahua | Next Basket Limited',
  description: 'Front End Developer | Next Basket Limited | Next JS | TypeScript | MUI | Redux Toolkit | TailwindCSS | CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
        <MainLayout>
            {children}
        </MainLayout>
        </Providers>
      </body>
    </html>
  )
}
