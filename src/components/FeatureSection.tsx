
import Icon from "@/components/ui/icon";

const FeatureSection = () => {
  return (
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
  );
};

export default FeatureSection;
