import Link from 'next/link'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="VisitKitai" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 text-sm">
              Премиум туры в Китай для российских туристов. Индивидуальные программы, бизнес-туры, семейный отдых.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-accent-gold transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/tours" className="hover:text-accent-gold transition-colors">
                  Туры
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-accent-gold transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link href="/payment#faq" className="hover:text-accent-gold transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Telegram: @visitkitai</li>
              <li>WhatsApp: +7 XXX XXX XX XX</li>
              <li>Email: info@visitkitai.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 VisitKitai. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
