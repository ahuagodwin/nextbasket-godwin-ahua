import type { Metadata } from 'next'
import './globals.css'
import { MainLayout } from '@/components'


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
    <html lang="en">
      <body>
        <MainLayout>
            {children}
        </MainLayout>
      </body>
    </html>
  )
}
