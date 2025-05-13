import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Импорт компонентов после рефакторинга
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductCatalog from "@/components/ProductCatalog";
import ReadySets from "@/components/ReadySets";
import ClothingBuilder from "@/components/ClothingBuilder";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Хедер */}
      <Header />

      {/* Главный баннер */}
      <Banner />

      {/* Основное содержимое */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <Tabs defaultValue="catalog" className="mb-8">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-gray-100">
            <TabsTrigger value="catalog" className="flex-1">
              Каталог
            </TabsTrigger>
            <TabsTrigger value="constructor" className="flex-1">
              Конструктор
            </TabsTrigger>
            <TabsTrigger value="sets" className="flex-1">
              Готовые комплекты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="catalog">
            <ProductCatalog />
          </TabsContent>

          <TabsContent value="constructor">
            <ClothingBuilder />
          </TabsContent>

          <TabsContent value="sets">
            <ReadySets />
          </TabsContent>
        </Tabs>
      </main>

      {/* Секция преимуществ */}
      <FeatureSection />

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default Index;
