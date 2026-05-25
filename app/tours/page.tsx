import { Clock, MapPin } from 'lucide-react'
import TourCard from '@/components/TourCard'

export default function ToursPage() {
  const tours = [
    {
      id: 1,
      title: 'Пекин — Великая Китайская стена',
      titleCn: '北京 — 万里长城',
      duration: '5 дней',
      price: 'от $1,200',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
      tags: ['Семейный', 'Культурный'],
      description: 'Запретный город, Великая стена, Храм Неба, традиционная кухня',
      category: 'culture',
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
      category: 'business',
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
      category: 'business',
    },
    {
      id: 4,
      title: 'Иу — Мировой рынок товаров',
      titleCn: '义乌 — 小商品之都',
      duration: '4 дня',
      price: 'от $900',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      tags: ['Бизнес', 'Шопинг'],
      description: 'Международный торговый город, фабрики, логистика',
      category: 'business',
    },
    {
      id: 5,
      title: 'Сиань — Терракотовая армия',
      titleCn: '西安 — 兵马俑',
      duration: '4 дня',
      price: 'от $1,050',
      image: 'https://images.unsplash.com/photo-1591017403286-fd8493524e1e?w=800&q=80',
      tags: ['Культурный', 'Исторический'],
      description: 'Терракотовая армия, древняя стена, мусульманский квартал',
      category: 'culture',
    },
    {
      id: 6,
      title: 'Ханчжоу — Райский город',
      titleCn: '杭州 — 人间天堂',
      duration: '3 дня',
      price: 'от $750',
      image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
      tags: ['Семейный', 'Природа'],
      description: 'Озеро Сиху, чайные плантации, храм Линъинь',
      category: 'family',
    },
    {
      id: 7,
      title: 'Чэнду — Родина панд',
      titleCn: '成都 — 熊猫之乡',
      duration: '4 дня',
      price: 'от $980',
      image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=800&q=80',
      tags: ['Семейный', 'Природа'],
      description: 'Питомник панд, сычуаньская кухня, древний город',
      category: 'family',
    },
    {
      id: 8,
      title: 'Харбин — Ледяной город',
      titleCn: '哈尔滨 — 冰城',
      duration: '4 дня',
      price: 'от $850',
      image: 'https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&q=80',
      tags: ['Зимний', 'Культурный'],
      description: 'Ледяной город, Софийский собор, русская история',
      category: 'culture',
    },
    {
      id: 9,
      title: 'Санья — Тропический рай',
      titleCn: '三亚 — 热带天堂',
      duration: '6 дней',
      price: 'от $1,400',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      tags: ['Пляжный', 'Семейный'],
      description: 'Пляжи Хайнаня, отели 5*, дайвинг, спа',
      category: 'family',
    },
  ]

  const categories = [
    { id: 'all', name: 'Все туры', count: tours.length },
    { id: 'business', name: 'Бизнес-туры', count: tours.filter(t => t.category === 'business').length },
    { id: 'culture', name: 'Культурные', count: tours.filter(t => t.category === 'culture').length },
    { id: 'family', name: 'Семейные', count: tours.filter(t => t.category === 'family').length },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Наши туры</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Индивидуальные программы для каждого типа путешественников
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-primary mb-4">Категории</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors flex justify-between items-center"
                      >
                        <span>{cat.name}</span>
                        <span className="text-gray-400 text-sm">{cat.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>

                <hr className="my-6" />

                <h3 className="text-lg font-semibold text-primary mb-4">Нужна помощь?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Свяжитесь с нами для индивидуального подбора тура
                </p>
                <a
                  href="https://t.me/visitkitai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#0088cc] text-white text-center py-3 rounded-lg font-medium hover:bg-[#0077b5] transition-colors"
                >
                  Написать в Telegram
                </a>
              </div>
            </aside>

            {/* Tours Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Не нашли подходящий тур?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Мы создадим индивидуальную программу специально для вас. Расскажите о ваших пожеланиях, и мы подготовим уникальный маршрут.
          </p>
          <a
            href="https://t.me/visitkitai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-colors"
          >
            Заказать индивидуальный тур
          </a>
        </div>
      </section>
    </div>
  )
}
