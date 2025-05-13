
import { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/components/ui/use-toast";

interface ItemColor {
  name: string;
  value: string;
}

interface ClothingItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    category: string;
    gender: string;
    sizes: string[];
    colors: ItemColor[];
    new?: boolean;
    sale?: boolean;
    salePrice?: number;
  };
}

const ClothingItem = ({ item }: ClothingItemProps) => {
  const [selectedColor, setSelectedColor] = useState(item.colors[0]?.value);
  
  const handleAddToCart = () => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${item.name} - ${selectedColor} добавлен в корзину`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-64 w-full object-cover"
        />
        {item.new && (
          <Badge className="absolute top-2 left-2 bg-blue-500">Новинка</Badge>
        )}
        {item.sale && (
          <Badge className="absolute top-2 right-2 bg-red-500">Скидка</Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="text-lg font-bold mb-1 line-clamp-1">{item.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
        
        <div className="flex gap-2 mb-2">
          {item.sizes.map(size => (
            <Badge key={size} variant="outline" className="bg-gray-100">
              {size}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm">Цвет:</span>
          {item.colors.map(color => (
            <button
              key={color.value}
              className={`w-6 h-6 rounded-full border ${selectedColor === color.value ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}
              style={{ backgroundColor: color.value }}
              onClick={() => setSelectedColor(color.value)}
              title={color.name}
              aria-label={`Цвет: ${color.name}`}
            />
          ))}
        </div>
        
        <div className="flex items-center">
          {item.sale && item.salePrice ? (
            <>
              <span className="text-lg font-bold text-red-500 mr-2">{item.salePrice} ₽</span>
              <span className="text-gray-500 line-through text-sm">{item.price} ₽</span>
            </>
          ) : (
            <span className="text-lg font-bold text-[#33C3F0]">{item.price} ₽</span>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ClothingItem;
