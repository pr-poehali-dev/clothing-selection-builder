
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
