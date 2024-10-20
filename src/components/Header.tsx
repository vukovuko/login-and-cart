import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="bg-[#F0F0F0] flex justify-between pb-[8px] pt-[8px] px-[16px] sm:pb-[10.75px] sm:pt-[11px] sm:pl-[66px] sm:pr-[71px] h-[69px]">
      <div className="pt-[9px]">
        <Link to="/collection">
          <img
            src={`${import.meta.env.BASE_URL}logo_builtt_veci.png`}
            alt="Builtt Logo"
            className="w-[87px] h-[38.25px] object-contain"
          />
        </Link>
      </div>
      <Link to="/cart" className="flex items-center">
        <div className="relative flex items-center cursor-pointer">
          <img
            src={`${import.meta.env.BASE_URL}Cart.svg`}
            alt="Cart Icon"
            className="w-[23px] h-[23px] object-contain"
          />
          <span className="absolute inset-0 flex items-center justify-center text-black mt-[5px] text-[10px] leading-[10px]">
            {totalItems}
          </span>
        </div>
      </Link>
    </header>
  );
};

export default Header;
