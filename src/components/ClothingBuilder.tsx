
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { toast } from "@/components/ui/use-toast";
import { uniformItems } from "@/data/uniformData";

// Категории для конструктора
const builderCategories = [
  { id: "tops", label: "Верх", icon: "Shirt" },
  { id: "bottoms", label: "Низ", icon: "PantsIcon" },
  { id: "outerwear", label: "Верхняя одежда", icon: "Jacket" },
  { id: "accessories", label: "Аксессуары", icon: "Bookmark" },
  { id: "shoes", label: "Обувь", icon: "Footprints" },
];

// Маппинг категорий
const categoryMapping: Record<string, string[]> = {
  tops: ["shirt", "blouse", "polo"],
  bottoms: ["pants", "skirt"],
  outerwear: ["blazer", "jacket", "cardigan", "vest"],
  accessories: ["tie", "bow", "belt", "badge"],
  shoes: ["shoes"]
};

const ClothingBuilder = () => {
  const [selectedGender, setSelectedGender] = useState("boys");
  const [selectedCategory, setSelectedCategory] = useState("tops");
  const [selectedItems, setSelectedItems] = useState<Record<string, number>>({});
  const [height, setHeight] = useState(140); // рост в см
  
  // Получаем элементы для текущей категории и пола
  const getCategoryItems = () => {
    const categories = categoryMapping[selectedCategory] || [];
    return uniformItems.filter(item => 
      categories.includes(item.category) && 
      (item.gender === selectedGender || item.gender === "unisex")
    );
  };

  const categoryItems = getCategoryItems();
  
  // Функция для выбора элемента
  const selectItem = (itemId: number) => {
    setSelectedItems(prev => ({
      ...prev,
      [selectedCategory]: itemId
    }));
    
    toast({
      description: "Элемент добавлен в комплект",
    });
  };
  
  // Получение выбранных элементов для предпросмотра
  const getSelectedItemsData = () => {
    return Object.entries(selectedItems).map(([category, itemId]) => {
      return uniformItems.find(item => item.id === itemId);
    }).filter(Boolean);
  };
  
  const selectedItemsData = getSelectedItemsData();
  
  // Сохранение комплекта
  const saveOutfit = () => {
    if (Object.keys(selectedItems).length < 2) {
      toast({
        title: "Неполный комплект",
        description: "Выберите минимум 2 элемента для создания комплекта",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Комплект сохранен",
      description: `Ваш комплект из ${Object.keys(selectedItems).length} элементов сохранен`,
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Выбор пола и элементов */}
      <div className="lg:col-span-2">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Выберите пол:</h3>
          <div className="flex gap-4">
            <Button 
              variant={selectedGender === "boys" ? "default" : "outline"}
              onClick={() => setSelectedGender("boys")}
              size="lg"
              className="flex gap-2"
            >
              <Icon name="Male" className="h-5 w-5" />
              Мальчик
            </Button>
            <Button 
              variant={selectedGender === "girls" ? "default" : "outline"}
              onClick={() => setSelectedGender("girls")}
              size="lg"
              className="flex gap-2"
            >
              <Icon name="Female" className="h-5 w-5" />
              Девочка
            </Button>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Рост ребенка: {height} см</h3>
          <Slider 
            value={[height]} 
            min={100} 
            max={190} 
            step={1} 
            onValueChange={(value) => setHeight(value[0])}
            className="mb-2"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>100 см</span>
            <span>190 см</span>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Выберите элементы формы:</h3>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="mb-6 w-full justify-start overflow-x-auto">
              {builderCategories.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="flex gap-2">
                  <Icon name={category.icon} className="h-4 w-4" fallback="CircleAlert" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {builderCategories.map(category => (
              <TabsContent key={category.id} value={category.id} className="pt-2">
                {categoryItems.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categoryItems.map(item => (
                      <div 
                        key={item.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-all ${
                          selectedItems[selectedCategory] === item.id ? 'border-blue-500 ring-2 ring-blue-200' : 'hover:border-gray-400'
                        }`}
                        onClick={() => selectItem(item.id)}
                      >
                        <div className="h-40 mb-2 relative">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-md"
                          />
                          {selectedItems[selectedCategory] === item.id && (
                            <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1">
                              <Icon name="Check" className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                        <p className="font-bold text-[#33C3F0]">{item.price} ₽</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Нет доступных элементов в данной категории</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
      
      {/* Предпросмотр комплекта */}
      <div className="bg-gray-50 rounded-lg p-6 border">
        <h3 className="text-xl font-bold mb-4 text-center">Ваш комплект</h3>
        
        {selectedItemsData.length > 0 ? (
          <>
            <div className="aspect-[3/4] bg-white rounded-lg mb-4 flex items-center justify-center border">
              <div className="flex flex-col items-center">
                {/* Здесь вместо статичной картинки можно использовать манекен с выбранными элементами */}
                <img 
                  src={selectedGender === "boys" 
                    ? "https://images.unsplash.com/photo-1585442231896-ff8146f7af81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    : "https://images.unsplash.com/photo-1621786030849-d6e1b8b5cc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  } 
                  alt="Превью комплекта"
                  className="max-h-[300px] object-contain rounded-md"
                />
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              <h4 className="font-semibold">Выбранные элементы:</h4>
              {selectedItemsData.map(item => item && (
                <div key={item.id} className="flex justify-between items-center py-1 border-b">
                  <span>{item.name}</span>
                  <span className="font-medium">{item.price} ₽</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2 font-bold">
                <span>Итого:</span>
                <span className="text-[#33C3F0]">
                  {selectedItemsData.reduce((sum, item) => sum + (item?.price || 0), 0)} ₽
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" onClick={() => setSelectedItems({})}>
                Очистить
              </Button>
              <Button onClick={saveOutfit}>
                Сохранить
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Icon name="ShoppingBag" className="h-12 w-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">Выберите элементы из каталога, чтобы сформировать комплект</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClothingBuilder;
