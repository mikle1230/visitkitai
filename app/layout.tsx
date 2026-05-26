import type { Metadata } from 'next'
import './globals.css'

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
        {children}
      </body>
    </html>
  )
}
