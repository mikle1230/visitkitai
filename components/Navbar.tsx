'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">Visit</span>
            <span className="text-2xl font-bold text-accent-gold">Kitai</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-primary transition-colors">
              Туры
            </Link>
            <Link href="/payment" className="text-gray-700 hover:text-primary transition-colors">
              Оплата
            </Link>
            <Link href="/payment#faq" className="text-gray-700 hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="#contact"
              className="bg-accent-gold text-white px-5 py-2 rounded-lg font-medium hover:bg-accent-gold/90 transition-colors"
            >
              Связаться
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Главная
              </Link>
              <Link href="/tours" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Туры
              </Link>
              <Link href="/payment" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                Оплата
              </Link>
              <Link href="/payment#faq" className="text-gray-700 hover:text-primary" onClick={() => setIsOpen(false)}>
                FAQ
              </Link>
              <Link
                href="#contact"
                className="bg-accent-gold text-white px-5 py-2 rounded-lg font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Связаться
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
