export const NAV_LINKS = [
  { href: "#hero", label: "Главная" },
  { href: "#services", label: "Услуги" },
  { href: "#prices", label: "Цены" },
  { href: "#about", label: "О нас" },
  { href: "#contacts", label: "Контакты" },
] as const;

export const ADVANTAGES = [
  {
    title: "Профессиональное оборудование",
    description:
      "Промышленные мойки высокого давления, мягкие щётки и системы сушки без разводов.",
    icon: "wrench",
  },
  {
    title: "Безопасная автохимия",
    description:
      "Премиальные составы pH-нейтральные для лака, стёкол и чувствительных покрытий.",
    icon: "flask",
  },
  {
    title: "Опытные специалисты",
    description:
      "Мастера детейлинга с опытом работы с люксовыми и спортивными автомобилями.",
    icon: "users",
  },
  {
    title: "Быстрое обслуживание",
    description:
      "Экспресс-программы от 20 минут и онлайн-запись без очередей — тестовый режим.",
    icon: "zap",
  },
] as const;

export const SERVICES = [
  {
    id: "express",
    title: "Экспресс-мойка",
    description: "Быстрая внешняя мойка кузова, колёс и стёкол. Идеально между делами.",
    price: "от 500 ₽",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "complex",
    title: "Комплексная мойка",
    description: "Кузов, арки, диски, пылесос салона, протирка пластика и стёкол.",
    price: "от 1200 ₽",
    image:
      "https://images.unsplash.com/photo-1520340358514-3d2aab0d7b8f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "interior",
    title: "Химчистка салона",
    description: "Глубокая чистка ткани, кожи и потолка с безопасной автохимией.",
    price: "от 4500 ₽",
    image:
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "detailing",
    title: "Детейлинг",
    description: "Полный уход: деконтаминация, полировка зон, уход за салоном.",
    price: "от 8000 ₽",
    image:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "polish",
    title: "Полировка кузова",
    description: "Удаление голограмм и лёгких царапин, восстановление глубины цвета.",
    price: "от 6000 ₽",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "coating",
    title: "Защитное покрытие",
    description: "Керамика и гидрофобные составы для долгосрочной защиты ЛКП.",
    price: "от 10000 ₽",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

export const REVIEWS = [
  {
    name: "Алексей М.",
    car: "BMW X5 · демо-отзыв",
    text: "Машина как новая — без разводов, салон пахнет чистотой. Записывался онлайн за пару минут.",
    rating: 5,
  },
  {
    name: "Марина К.",
    car: "Tesla Model Y · демо-отзыв",
    text: "Аккуратно работают с керамикой и сенсорами. Персонал вежливый, сервис на уровне студии.",
    rating: 5,
  },
  {
    name: "Игорь В.",
    car: "Mercedes GLE · демо-отзыв",
    text: "Комплексная мойка + лёгкая полировка — результат выше ожиданий. Рекомендую друзьям.",
    rating: 5,
  },
  {
    name: "Елена С.",
    car: "Audi Q7 · демо-отзыв",
    text: "Химчистка вернула светлый салон. Удобно, что можно выбрать время без очереди.",
    rating: 4,
  },
] as const;

export const CAR_TYPES = [
  "Седан",
  "Хэтчбек",
  "Кроссовер / SUV",
  "Минивэн",
  "Пикап",
  "Спорткар",
] as const;

export const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
] as const;

export const CONTACT = {
  address: "г. Москва, ул. Демонстрационная, 12 (тестовый адрес)",
  phone: "+7 (999) 000-00-00",
  phoneHref: "tel:+79990000000",
  hours: "Ежедневно 09:00–21:00 (демо)",
  email: "demo@aquadrive.test",
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=37.60%2C55.74%2C37.64%2C55.76&layer=mapnik&marker=55.75%2C37.62",
  routeUrl:
    "https://yandex.ru/maps/?rtext=~55.75,37.62&rtt=auto",
} as const;

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=2400&q=85";

export const BEFORE_IMAGE =
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80";

export const AFTER_IMAGE =
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80";
