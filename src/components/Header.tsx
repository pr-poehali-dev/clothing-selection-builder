
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
