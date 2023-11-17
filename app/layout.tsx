import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ToasterContext from './context/toaster-context'
import AuthContext from './context/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger',
  icons : [
    {
      url : '/main-logo.svg',
      href : '/main-logo.svg'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          {children}
          <ToasterContext/>
        </AuthContext>
      </body>
    </html>
  )
}
