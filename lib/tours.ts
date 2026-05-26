export interface Tour {
  id: string
  title: string
  titleCn?: string
  tags: string[]
  duration: string
  price: number
  currency: string
  coverImage: string
  itinerary: ItineraryDay[]
  inclusions: string
  exclusions: string
  status: 'published' | 'draft'
  createdAt: string
  updatedAt: string
}

export interface ItineraryDay {
  day: number
  title: string
  description: string
}

const STORAGE_KEY = 'visitkitai_tours'

// Default demo tours
const defaultTours: Tour[] = [
  {
    id: '1',
    title: 'Пекин — Великая Китайская стена',
    titleCn: '北京 — 万里长城',
    tags: ['Семейный', 'Культурный'],
    duration: '5 дней',
    price: 1200,
    currency: 'USD',
    coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
    itinerary: [
      { day: 1, title: 'Прибытие в Пекин', description: 'Встреча в аэропорту, трансфер в отель, свободное время' },
      { day: 2, title: 'Запретный город', description: 'Экскурсия в Запретный город, площадь Тяньаньмэнь' },
      { day: 3, title: 'Великая Китайская стена', description: 'Поездка на Великую стену, участок Мутяньюй' },
      { day: 4, title: 'Храм Неба', description: 'Посещение Храма Неба, шопинг на шелковом рынке' },
      { day: 5, title: 'Отъезд', description: 'Трансфер в аэропорт, вылет' },
    ],
    inclusions: 'Проживание в отеле 4*\nЗавтраки\nТрансферы\nУслуги гида\nВходные билеты',
    exclusions: 'Авиабилеты\nВиза\nЛичные расходы\nЧаевые',
    status: 'published',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    title: 'Шанхай — Мегаполис будущего',
    titleCn: '上海 — 未来之都',
    tags: ['Бизнес', 'Городской'],
    duration: '4 дня',
    price: 980,
    currency: 'USD',
    coverImage: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?w=800&q=80',
    itinerary: [
      { day: 1, title: 'Прибытие в Шанхай', description: 'Встреча, размещение в отеле' },
      { day: 2, title: 'Набережная Вайтань', description: 'Прогулка по набережной, телебашня Восточная жемчужина' },
      { day: 3, title: 'Древний город', description: 'Шопинг, чайные церемонии' },
      { day: 4, title: 'Отъезд', description: 'Трансфер в аэропорт' },
    ],
    inclusions: 'Проживание в отеле 4*\nЗавтраки\nТрансферы\nУслуги гида',
    exclusions: 'Авиабилеты\nЛичные расходы',
    status: 'published',
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
  },
  {
    id: '3',
    title: 'Гуанчжоу — Кантонская ярмарка',
    titleCn: '广州 — 广交会',
    tags: ['Бизнес', 'Шопинг'],
    duration: '5 дней',
    price: 1100,
    currency: 'USD',
    coverImage: 'https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=800&q=80',
    itinerary: [
      { day: 1, title: 'Прибытие', description: 'Встреча в аэропорту' },
      { day: 2, title: 'Кантонская ярмарка', description: 'Посещение выставки' },
      { day: 3, title: 'Рынки Гуанчжоу', description: 'Оптовые рынки' },
      { day: 4, title: 'Деловые встречи', description: 'Встречи с поставщиками' },
      { day: 5, title: 'Отъезд', description: 'Трансфер в аэропорт' },
    ],
    inclusions: 'Проживание\nТрансферы\nБизнес-переводчик',
    exclusions: 'Авиабилеты\nЛичные расходы',
    status: 'draft',
    createdAt: '2024-01-17T10:00:00Z',
    updatedAt: '2024-01-17T10:00:00Z',
  },
]

// Note: In a real app, this would use a database
// For now, we'll use an in-memory store that persists via API routes
let toursStore: Tour[] = [...defaultTours]

export function getAllTours(): Tour[] {
  return toursStore
}

export function getTourById(id: string): Tour | undefined {
  return toursStore.find((tour) => tour.id === id)
}

export function createTour(tour: Omit<Tour, 'id' | 'createdAt' | 'updatedAt'>): Tour {
  const newTour: Tour = {
    ...tour,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  toursStore.push(newTour)
  return newTour
}

export function updateTour(id: string, updates: Partial<Tour>): Tour | null {
  const index = toursStore.findIndex((tour) => tour.id === id)
  if (index === -1) return null

  toursStore[index] = {
    ...toursStore[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  }
  return toursStore[index]
}

export function deleteTour(id: string): boolean {
  const index = toursStore.findIndex((tour) => tour.id === id)
  if (index === -1) return false
  toursStore.splice(index, 1)
  return true
}
