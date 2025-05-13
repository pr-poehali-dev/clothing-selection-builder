
import { Button } from "@/components/ui/button";

const ReadySets = () => {
  return (
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
  );
};

export default ReadySets;
