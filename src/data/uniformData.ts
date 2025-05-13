
// Типы пола для фильтрации
export const genderTypes = [
  { value: "all", label: "Все" },
  { value: "boys", label: "Мальчики" },
  { value: "girls", label: "Девочки" },
  { value: "unisex", label: "Унисекс" }
];

// Категории одежды
export const categoryTypes = [
  { value: "all", label: "Все категории" },
  { value: "shirt", label: "Рубашки" },
  { value: "blouse", label: "Блузки" },
  { value: "pants", label: "Брюки" },
  { value: "skirt", label: "Юбки" },
  { value: "blazer", label: "Пиджаки" },
  { value: "jacket", label: "Жакеты" },
  { value: "cardigan", label: "Кардиганы" },
  { value: "vest", label: "Жилеты" },
  { value: "polo", label: "Поло" },
  { value: "tie", label: "Галстуки" },
  { value: "shoes", label: "Обувь" }
];

// Примерные данные элементов униформы
export const uniformItems = [
  // Рубашки для мальчиков
  {
    id: 1,
    name: "Классическая белая рубашка",
    price: 1200,
    description: "Классическая школьная рубашка из хлопка",
    imageUrl: "https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "shirt",
    gender: "boys",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Белый", value: "#FFFFFF" },
      { name: "Голубой", value: "#E6F2FF" }
    ],
    new: true
  },
  {
    id: 2,
    name: "Рубашка в клетку",
    price: 1450,
    description: "Хлопковая рубашка с узором в мелкую клетку",
    imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "shirt",
    gender: "boys",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Синяя клетка", value: "#1A3B80" },
      { name: "Красная клетка", value: "#B22222" }
    ]
  },

  // Блузки для девочек
  {
    id: 3,
    name: "Блузка с воротником",
    price: 1350,
    description: "Элегантная блузка с отложным воротником",
    imageUrl: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "blouse",
    gender: "girls",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Белый", value: "#FFFFFF" },
      { name: "Кремовый", value: "#FFF8DC" }
    ]
  },
  {
    id: 4,
    name: "Блузка с коротким рукавом",
    price: 1200,
    description: "Легкая блузка с коротким рукавом и кружевом",
    imageUrl: "https://images.unsplash.com/photo-1551524559-8af4e6624178?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "blouse",
    gender: "girls",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Белый", value: "#FFFFFF" },
      { name: "Розовый", value: "#FFC0CB" }
    ],
    sale: true,
    salePrice: 990
  },

  // Брюки
  {
    id: 5,
    name: "Классические брюки",
    price: 1800,
    description: "Классические прямые брюки из смесовой ткани",
    imageUrl: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "pants",
    gender: "boys",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ]
  },
  {
    id: 6,
    name: "Брюки для девочек",
    price: 1750,
    description: "Школьные брюки с защипами спереди",
    imageUrl: "https://images.unsplash.com/photo-1548883253-317a961d2174?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "pants",
    gender: "girls",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ]
  },

  // Юбки
  {
    id: 7,
    name: "Плиссированная юбка",
    price: 1500,
    description: "Школьная юбка в складку длиной чуть выше колена",
    imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "skirt",
    gender: "girls",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" },
      { name: "Клетка", value: "pattern" }
    ]
  },
  {
    id: 8,
    name: "Прямая юбка",
    price: 1400,
    description: "Прямая юбка-карандаш для старших классов",
    imageUrl: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "skirt",
    gender: "girls",
    sizes: ["146", "152", "158", "164", "170"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ]
  },

  // Пиджаки и жакеты
  {
    id: 9,
    name: "Классический пиджак для мальчика",
    price: 2800,
    description: "Однобортный пиджак на двух пуговицах",
    imageUrl: "https://images.unsplash.com/photo-1548133750-8dd45186be0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "blazer",
    gender: "boys",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ]
  },
  {
    id: 10,
    name: "Жакет для девочки",
    price: 2700,
    description: "Классический приталенный жакет с подкладкой",
    imageUrl: "https://images.unsplash.com/photo-1591369822207-11767cb2e219?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "jacket",
    gender: "girls",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ],
    new: true
  },

  // Жилеты
  {
    id: 11,
    name: "Трикотажный жилет",
    price: 1400,
    description: "Вязаный жилет из мягкой пряжи с V-образным вырезом",
    imageUrl: "https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "vest",
    gender: "unisex",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Бордовый", value: "#800020" }
    ]
  },
  {
    id: 12,
    name: "Жилет на пуговицах",
    price: 1600,
    description: "Классический жилет на подкладке с карманами",
    imageUrl: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "vest",
    gender: "boys",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Серый", value: "#808080" }
    ],
    sale: true,
    salePrice: 1280
  },

  // Поло
  {
    id: 13,
    name: "Рубашка-поло",
    price: 950,
    description: "Хлопковая рубашка-поло с коротким рукавом",
    imageUrl: "https://images.unsplash.com/photo-1593429862881-55efc9eaef89?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "polo",
    gender: "unisex",
    sizes: ["128", "134", "140", "146", "152", "158", "164"],
    colors: [
      { name: "Белый", value: "#FFFFFF" },
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" }
    ]
  },

  // Галстуки и аксессуары
  {
    id: 14,
    name: "Классический галстук",
    price: 600,
    description: "Классический однотонный галстук шириной 7 см",
    imageUrl: "https://images.unsplash.com/photo-1575736109262-900a0d0e86df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "tie",
    gender: "boys",
    sizes: ["one-size"],
    colors: [
      { name: "Черный", value: "#000000" },
      { name: "Темно-синий", value: "#000080" },
      { name: "Бордовый", value: "#800020" }
    ]
  }
];
