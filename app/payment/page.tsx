import { Check, CreditCard, Smartphone, Building, HelpCircle, ChevronDown } from 'lucide-react'

export default function PaymentPage() {
  const paymentMethods = [
    {
      icon: Building,
      title: 'Банковский перевод (рубли)',
      description: 'Прямой перевод на российский банк в рублях по курсу ЦБ',
    },
    {
      icon: Smartphone,
      title: 'USDT / Криптовалюта',
      description: 'Быстрые и безопасные переводы в USDT (TRC-20, ERC-20)',
    },
    {
      icon: CreditCard,
      title: 'Наличные / Карта в Китае',
      description: 'Оплата остатка при встрече наличными или картой',
    },
  ]

  const faqItems = [
    {
      question: 'Нужна ли виза для поездки в Китай?',
      answer: 'Гражданам РФ с 2024 года доступен безвизовый въезд в Китай на срок до 15 дней для туристических целей. Для более длительного пребывания или деловых поездок требуется виза, которую мы поможем оформить.',
    },
    {
      question: 'Как забронировать тур?',
      answer: 'Выберите понравившийся тур на сайте и свяжитесь с нами через Telegram или WhatsApp. Мы уточним детали, рассчитаем стоимость и пришлём подтверждение бронирования.',
    },
    {
      question: 'Какой размер предоплаты?',
      answer: 'Для бронирования достаточно внести предоплату 10-20% от стоимости тура. Остаток можно оплатить по прибытии в Китай.',
    },
    {
      question: 'Можно ли изменить даты тура?',
      answer: 'Да, даты можно изменить без штрафов за 7 дней до начала тура. При более позднем изменении возможны дополнительные условия.',
    },
    {
      question: 'Что входит в стоимость тура?',
      answer: 'В стоимость включены: трансфер из/в аэропорт, проживание в отелях указанной категории, питание по программе, услуги русскоговорящего гида, входные билеты, транспорт по маршруту. Авиабилеты и виза оплачиваются дополнительно.',
    },
    {
      question: 'Какие документы нужны для поездки?',
      answer: 'Для безвизового въезда: загранпаспорт (действующий минимум 6 месяцев), обратные билеты, бронь отеля. Для визы: additionally фотографии 3x4 см, справка с работы.',
    },
    {
      question: 'Есть ли страховка?',
      answer: 'Медицинская страховка включена во все туры. Покрытие составляет $30,000 и включает экстренную медицинскую помощь и эвакуацию.',
    },
    {
      question: 'Можно ли путешествовать с детьми?',
      answer: 'Да, мы организуем семейные туры с учётом интересов детей. Предоставляем детские автокресла, рекомендуем семейные отели и разрабатываем маршруты с учётом детского режима.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Оплата и FAQ</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Удобные способы оплаты и ответы на частые вопросы
          </p>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Info */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Способы оплаты</h2>
              <p className="text-gray-600 mb-8">
                Мы предлагаем несколько удобных способов оплаты, чтобы вы могли выбрать наиболее подходящий вариант.
              </p>

              <div className="space-y-6">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-1">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Как это работает</h2>

              <div className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold mb-1">Выберите тур</h4>
                      <p className="text-gray-300 text-sm">Просмотрите наши туры и выберите подходящий вариант</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold mb-1">Свяжитесь с нами</h4>
                      <p className="text-gray-300 text-sm">Напишите в Telegram или WhatsApp для уточнения деталей</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold mb-1">Внесите предоплату 10-20%</h4>
                      <p className="text-gray-300 text-sm">Забронируйте тур, внеся небольшую предоплату</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold mb-1">Получите документы</h4>
                      <p className="text-gray-300 text-sm">Мы пришлём подтверждение и визовую поддержку</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent-gold rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold mb-1">Оплатите остаток в Китае</h4>
                      <p className="text-gray-300 text-sm">Остаток суммы можно оплатить по прибытии</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Deposit Info */}
              <div className="mt-8 bg-accent-gold/10 border border-accent-gold/20 rounded-xl p-6">
                <h3 className="font-semibold text-primary mb-2 flex items-center">
                  <Check className="w-5 h-5 text-accent-gold mr-2" />
                  Гарантия предоплаты
                </h3>
                <p className="text-gray-600 text-sm">
                  Предоплата полностью возвращается при отмене тура за 14 дней до начала. При отмене за 7 дней — возвращается 50%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Виза и въезд в Китай</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Безвизовый въезд</h3>
              <p className="text-gray-600 text-sm">
                Граждане РФ могут находиться в Китае до 15 дней без визы для туризма. Действует до конца 2025 года.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Туристическая виза</h3>
              <p className="text-gray-600 text-sm">
                Для поездок дольше 15 дней оформляем туристическую визу L. Срок оформления — 5-7 рабочих дней.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">Бизнес-виза</h3>
              <p className="text-gray-600 text-sm">
                Для деловых поездок оформляем визы типа M. Предоставляем приглашения от китайских партнёров.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Часто задаваемые вопросы</h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details key={index} className="bg-white rounded-xl shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-primary pr-4">{item.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Напишите нам, и мы ответим в течение 1 часа в рабочее время
          </p>
          <a
            href="https://t.me/visitkitai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-gold/90 transition-colors"
          >
            Написать в Telegram
          </a>
        </div>
      </section>
    </div>
  )
}
