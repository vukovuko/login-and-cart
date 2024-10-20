import React from "react";
import { formatMoney } from "../utils/formatMoney";

type PaymentInfoProps = {
  label: string;
  amount: number;
  currency: string;
};

const PaymentInfo: React.FC<PaymentInfoProps> = ({
  label,
  amount,
  currency,
}) => {
  return (
    <div className="flex justify-between items-center mb-[14px]">
      <span className="text-[16px] leading-[28px] tracking-[0]">{label}</span>

      <div className="flex items-start gap-1">
        <span
          className="text-[18px] leading-[25px]"
          style={{ letterSpacing: "-0.01em" }}
        >
          {formatMoney(amount)}
        </span>
        <span
          className="text-[10px] leading-[12px] text-black ml-[2px] align-top"
          style={{ letterSpacing: "0.04em" }}
        >
          {currency}
        </span>
      </div>
    </div>
  );
};

export default PaymentInfo;
