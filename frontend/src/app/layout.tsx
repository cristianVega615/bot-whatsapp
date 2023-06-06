import './globals.css'
import { Roboto } from 'next/font/google'

const inter = Roboto({
  weight: '400',
  subsets: ['latin']
}) 

export const metadata = {
  title: 'ChatBot',
  description: 'Un pequeño proyecto probando la libreria de chatbot',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
