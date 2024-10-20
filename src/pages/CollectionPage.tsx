import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import productsData from "../data.json";

interface Product {
  id: number;
  name: string;
  price: number;
  compare_at_price?: number;
  imageSrc: string;
}

const CollectionPage: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData.products);
  }, [navigate]);

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:pl-[119.75px] lg:pr-[118px] pb-8">
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow mt-[40px] md:mt-[60px] lg:mt-[46px]">
          <div className="flex items-center gap-[9px] mb-[20px] md:mb-[25px] lg:mb-[30px]">
            <h1
              className="font-bold text-[20px] leading-[24px] text-black"
              style={{ letterSpacing: "0.01em" }}
            >
              Svi proizvodi
            </h1>
            <span
              className="text-[15px] leading-[23px] text-black opacity-50 mb-[-4px]"
              style={{ letterSpacing: "0" }}
            >
              {products.length} proizvoda
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-[16px] md:gap-x-[20px] lg:gap-x-[22.25px] gap-y-[40px] md:gap-y-[50px] lg:gap-y-[60px]">
            {products.map((product) => (
              <ProductCard
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                compare_at_price={product.compare_at_price}
                imageSrc={product.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
