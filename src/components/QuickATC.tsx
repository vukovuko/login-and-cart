import React, { useState } from "react";
import { toast } from "react-toastify";
import { Flip } from "react-toastify";

interface QuickATCProps {
  onAddToCart: (quantity: number) => void;
}

const QuickATC: React.FC<QuickATCProps> = ({ onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(quantity);
    toast("Proizvod dodat u korpu!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Flip,
    });
  };

  return (
    <div className="absolute bottom-2 left-[8.25px] flex items-center gap-[5px]">
      <div className="flex items-center bg-white rounded-full pl-[14px] pr-[11px] py-[9px] w-[98px] justify-between">
        <button
          className="w-[14.63px] h-[14.63px] flex items-center justify-center"
          aria-label="Decrease quantity"
          onClick={decrement}
        >
          <img
            src="/Minus.svg"
            alt="Minus Icon"
            className="w-full h-full object-contain"
          />
        </button>
        <input
          type="number"
          min="1"
          max="50"
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            if (value >= 1 && value <= 50) {
              setQuantity(value);
            }
          }}
          className="text-black text-[16px] font-medium w-[20px] h-[18px] text-center border-none outline-none ml-[4px] mr-[14px]"
        />
        <button
          className="w-[14.63px] h-[14.63px] flex items-center justify-center"
          aria-label="Increase quantity"
          onClick={increment}
        >
          <img
            src="/Plus.svg"
            alt="Plus Icon"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
      <div
        className="w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center cursor-pointer"
        onClick={handleAddToCart}
      >
        <img
          src="/Cart.png"
          alt="Cart Icon"
          className="w-[21px] h-[21px] object-contain"
        />
      </div>
    </div>
  );
};

export default QuickATC;
