import Link from 'next/link'
import { MapPin, Clock, ArrowRight } from 'lucide-react'

interface Tour {
  id: number
  title: string
  titleCn: string
  duration: string
  price: string
  image: string
  tags: string[]
  description: string
}

interface TourCardProps {
  tour: Tour
}

export default function TourCard({ tour }: TourCardProps) {
  const inquiryText = encodeURIComponent(`Здравствуйте! Меня интересует тур "${tour.title}". Прошу прислать подробную информацию и стоимость.`)

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {tour.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-primary/90 text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-1">{tour.title}</h3>
        <p className="text-gray-400 text-sm mb-3">{tour.titleCn}</p>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tour.description}</p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <Clock className="w-4 h-4 mr-1" />
          <span>{tour.duration}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-accent-gold">{tour.price}</span>
          <a
            href={`https://t.me/visitkitai?text=${inquiryText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
          >
            Узнать больше
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  )
}
