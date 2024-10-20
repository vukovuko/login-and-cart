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
        <span className="text-[18px] leading-[25px] tracking--0.01">
          {formatMoney(amount)}
        </span>
        <span className="text-[10px] leading-[12px] text-black ml-[2px] align-top tracking-0.04">
          {currency}
        </span>
      </div>
    </div>
  );
};

export default PaymentInfo;
