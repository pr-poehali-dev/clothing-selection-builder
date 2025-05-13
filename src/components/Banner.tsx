
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
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
  );
};

export default Banner;
