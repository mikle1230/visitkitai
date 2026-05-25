import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export const metadata: Metadata = {
  title: 'VisitKitai - Откройте Китай с нами',
  description: 'Премиум туры в Китай для российских туристов. Индивидуальные программы, бизнес-туры, семейный отдых.',
  keywords: 'туры в Китай, Китай туризм, визит в Китай, бизнес-тур Китай',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  )
}
