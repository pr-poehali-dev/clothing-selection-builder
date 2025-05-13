
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ClothingItem from "@/components/ClothingItem";
import ClothingBuilder from "@/components/ClothingBuilder";
import { genderTypes, categoryTypes, uniformItems } from "@/data/uniformData";

const Index = () => {
  const [selectedGender, setSelectedGender] = useState("boys");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Фильтрация элементов в зависимости от выбранного пола и категории
  const filteredItems = uniformItems.filter(item => 
    (selectedGender === "all" || item.gender === selectedGender || item.gender === "unisex") &&
    (selectedCategory === "all" || item.category === selectedCategory)
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер */}
      <header className="bg-[#1A1F2C] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Школьная форма</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-[#33C3F0] transition-colors">Главная</a>
            <a href="#" className="hover:text-[#33C3F0] transition-colors">Каталог</a>
            <a href="#" className="hover:text-[#33C3F0] transition-colors">О нас</a>
            <a href="#" className="hover:text-[#33C3F0] transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button aria-label="Поиск">
              <Icon name="Search" className="h-5 w-5" />
            </button>
            <button aria-label="Корзина" className="relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 bg-[#33C3F0]">2</Badge>
            </button>
            <button className="md:hidden" aria-label="Меню">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Главный баннер */}
      <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A3142] text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Конструктор школьной формы</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Создайте идеальный комплект школьной формы, отвечающий требованиям вашего учебного заведения
          </p>
          <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white border-none px-8 py-6 text-lg">
            Начать подбор
          </Button>
        </div>
      </div>

      {/* Основное содержимое */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <Tabs defaultValue="catalog" className="mb-8">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-gray-100">
            <TabsTrigger value="catalog" className="flex-1">Каталог</TabsTrigger>
            <TabsTrigger value="constructor" className="flex-1">Конструктор</TabsTrigger>
            <TabsTrigger value="sets" className="flex-1">Готовые комплекты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="catalog">
            {/* Фильтры */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Пол</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {genderTypes.map(gender => (
                  <Button 
                    key={gender.value}
                    variant={selectedGender === gender.value ? "default" : "outline"}
                    onClick={() => setSelectedGender(gender.value)}
                  >
                    {gender.label}
                  </Button>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mb-4">Категории</h3>
              <div className="flex flex-wrap gap-2">
                {categoryTypes.map(category => (
                  <Button 
                    key={category.value}
                    variant={selectedCategory === category.value ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.value)}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Список товаров */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map(item => (
                <ClothingItem key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="constructor">
            <ClothingBuilder />
          </TabsContent>
          
          <TabsContent value="sets">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Популярные комплекты школьной формы</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="border rounded-lg p-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Классический комплект для мальчика" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">Классический комплект для мальчика</h4>
                  <p className="text-gray-600 mb-4">Включает пиджак, брюки, рубашку и галстук</p>
                  <p className="text-xl font-bold text-[#33C3F0] mb-4">4 900 ₽</p>
                  <Button className="w-full">Добавить в корзину</Button>
                </div>
                <div className="border rounded-lg p-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1621786030849-d6e1b8b5cc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Элегантный комплект для девочки" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">Элегантный комплект для девочки</h4>
                  <p className="text-gray-600 mb-4">Включает блузку, юбку, жилет и бант</p>
                  <p className="text-xl font-bold text-[#33C3F0] mb-4">4 500 ₽</p>
                  <Button className="w-full">Добавить в корзину</Button>
                </div>
                <div className="border rounded-lg p-4 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1596394536270-2f4405397e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Повседневный комплект унисекс" 
                    className="w-full h-64 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-bold mb-2">Повседневный комплект унисекс</h4>
                  <p className="text-gray-600 mb-4">Включает поло, брюки/юбку и кардиган</p>
                  <p className="text-xl font-bold text-[#33C3F0] mb-4">3 900 ₽</p>
                  <Button className="w-full">Добавить в корзину</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Секция преимуществ */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="CheckCircle" className="w-10 h-10 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Качественные материалы</h3>
              <p className="text-gray-600">Используем только проверенные материалы, комфортные для детей</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="Truck" className="w-10 h-10 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем заказы в кратчайшие сроки по всей России</p>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-md">
                <Icon name="Percent" className="w-10 h-10 text-[#33C3F0]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Выгодные цены</h3>
              <p className="text-gray-600">Предлагаем разумные цены и скидки для оптовых заказов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-[#1A1F2C] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Школьная форма</h3>
              <p className="mb-4">Качественная школьная форма для учеников всех возрастов</p>
              <div className="flex space-x-4">
                <a href="#" aria-label="Facebook">
                  <Icon name="Facebook" className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Instagram">
                  <Icon name="Instagram" className="h-6 w-6" />
                </a>
                <a href="#" aria-label="Twitter">
                  <Icon name="Twitter" className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Разделы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Конструктор</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Помощь</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Размерная сетка</a></li>
                <li><a href="#" className="hover:text-[#33C3F0] transition-colors">Вопросы и ответы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  <span>+7 (800) 123-45-67</span>
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  <span>info@school-uniform.ru</span>
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 mr-2" />
                  <span>г. Москва, ул. Школьная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2025 Школьная форма. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
