import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import QuickATC from "./QuickATC";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  compare_at_price?: number;
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  compare_at_price,
  imageSrc,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (quantity: number) => {
    dispatch(
      addToCart({ id, name, price, compare_at_price, imageSrc, quantity }),
    );
  };

  return (
    <div className="bg-white overflow-hidden relative group w-full sm:max-w-[284px] mx-auto">
      <div className="relative w-full h-[284px]">
        <img
          src={`${import.meta.env.BASE_URL}${imageSrc}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="block xl-custom:hidden xl-custom:group-hover:block transition-opacity duration-300">
          <QuickATC onAddToCart={handleAddToCart} />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-[18px] leading-[24px] text-black mb-[7px] tracking-0">
          {name}
        </h2>
        <ProductPrice price={price} />
      </div>
    </div>
  );
};

export default ProductCard;
