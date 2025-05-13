
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ClothingItem from "@/components/ClothingItem";
import { genderTypes, categoryTypes, uniformItems } from "@/data/uniformData";

const ProductCatalog = () => {
  const [selectedGender, setSelectedGender] = useState("boys");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // Фильтрация элементов в зависимости от выбранного пола и категории
  const filteredItems = uniformItems.filter(item => 
    (selectedGender === "all" || item.gender === selectedGender || item.gender === "unisex") &&
    (selectedCategory === "all" || item.category === selectedCategory)
  );

  return (
    <>
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
    </>
  );
};

export default ProductCatalog;
