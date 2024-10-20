import React from "react";
import { formatMoney } from "../utils/formatMoney";

interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
  quantity?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({
  price,
  compareAtPrice,
  quantity = 1,
}) => {
  const totalPrice = price * quantity;
  const totalCompareAtPrice = compareAtPrice ? compareAtPrice * quantity : null;

  return (
    <div className="flex flex-col gap-1 items-start">
      {" "}
      <div className="flex items-start gap-1">
        <span
          className="text-black text-[23.94px] leading-[33.3px] ml-[-1px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          {formatMoney(totalPrice)}
        </span>
        <span
          className="text-[13px] leading-[16px] text-black ml-[2px] align-top"
          style={{ letterSpacing: "0.04em" }}
        >
          RSD
        </span>
      </div>
      {totalCompareAtPrice && (
        <div className="flex">
          <span
            className="text-[#C94D00] text-[16px] leading-[18px] line-through"
            style={{ letterSpacing: "-0.01em" }}
          >
            {formatMoney(totalCompareAtPrice)}
          </span>
          <span
            className="text-[11px] leading-[16px] text-[#C94D00] ml-[2px] align-top"
            style={{ letterSpacing: "0.04em" }}
          >
            RSD
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductPrice;
