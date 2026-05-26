import Link from 'next/link'
import { Check, Star, Users, Car, MapPin, Shield, Clock, Plane } from 'lucide-react'
import TourCard from '@/components/TourCard'

export default function Home() {
  const featuredTours = [
    {
      id: 1,
      title: 'Пекин — Великая Китайская стена',
      titleCn: '北京 — 万里长城',
      duration: '5 дней',
      price: 'от $1,200',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
      tags: ['Семейный', 'Культурный'],
      description: 'Запретный город, Великая стена, Храм Неба, традиционная кухня',
    },
    {
      id: 2,
      title: 'Шанхай — Мегаполис будущего',
      titleCn: '上海 — 未来之都',
      duration: '4 дня',
      price: 'от $980',
      image: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80',
      tags: ['Бизнес', 'Городской'],
      description: 'Набережная Вайтань, телебашня, древний город, шопинг',
    },
    {
      id: 3,
      title: 'Гуанчжоу — Кантонская ярмарка',
      titleCn: '广州 — 广交会',
      duration: '5 дней',
      price: 'от $1,100',
      image: 'https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=800&q=80',
      tags: ['Бизнес', 'Шопинг'],
      description: 'Кантонская ярмарка, рынки, фабрики, деловые встречи',
    },
  ]

  const trustPoints = [
    {
      icon: Shield,
      title: 'Лицензированное агентство',
      description: 'Официальная лицензия китайского турагентства',
    },
    {
      icon: Users,
      title: 'Русскоговорящие гиды',
      description: 'Профессиональные гиды с опытом более 5 лет',
    },
    {
      icon: Car,
      title: 'Собственный автопарк',
      description: 'Mercedes V-Class, Toyota Alphard для комфорта',
    },
    {
      icon: Clock,
      title: '100% гарантия встречи',
      description: 'Встреча в аэропорту в любое время суток',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-32">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Откройте Китай с нами
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Премиум туры для российских туристов. Индивидуальные программы, бизнес-туры, семейный отдых с русскоговорящими гидами.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="bg-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-colors"
            >
              Смотреть туры
            </Link>
            <a
              href="https://t.me/visitkitai"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              Связаться с нами
            </a>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-accent-gold">500+</div>
              <div className="text-gray-300">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-gold">50+</div>
              <div className="text-gray-300">Маршрутов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-gold">100%</div>
              <div className="text-gray-300">Гарантия встречи</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-gold">24/7</div>
              <div className="text-gray-300">Поддержка</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы гарантируем премиум сервис и незабываемые впечатления от путешествия в Китай
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Популярные туры
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Индивидуальные программы для семейного отдыха и деловых поездок
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/tours"
              className="inline-flex items-center text-primary font-semibold text-lg hover:text-primary-light transition-colors"
            >
              Смотреть все туры
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Payment Info Banner */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Удобная система оплаты
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Предоплата всего 10-20% для бронирования</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Остаток оплаты по прибытии в Китай</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Принимаем рубли, USDT, наличные</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-accent-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Безопасные переводы без комиссий</span>
                </li>
              </ul>
              <Link
                href="/payment"
                className="inline-block mt-8 bg-accent-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-gold/90 transition-colors"
              >
                Подробнее об оплате
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-4">Как это работает</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4">1</div>
                    <span>Выберите тур и свяжитесь с нами</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4">2</div>
                    <span>Внесите предоплату 10-20%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4">3</div>
                    <span>Получите подтверждение и визовую поддержку</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4">4</div>
                    <span>Оплатите остаток по прибытии</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
            Готовы начать путешествие?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Свяжитесь с нами для получения индивидуального предложения. Мы ответим в течение 1 часа в рабочее время.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://t.me/visitkitai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0088cc] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0077b5] transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>
            <a
              href="https://wa.me/7XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
