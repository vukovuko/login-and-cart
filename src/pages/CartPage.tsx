import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { updateQuantity, removeFromCart } from "../store/cartSlice";
import ProductPrice from "../components/ProductPrice";
import PaymentInfo from "../components/PaymentInfo";
import { formatMoney } from "../utils/formatMoney";

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart({ id }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalSavings = cartItems.reduce((total, item) => {
    if (item.compare_at_price && item.compare_at_price > item.price) {
      const savingsPerItem =
        (item.compare_at_price - item.price) * item.quantity;
      return total + savingsPerItem;
    }
    return total;
  }, 0);

  return (
    <div className="flex flex-col xl:flex-row justify-between px-4 xl:px-0 mt-[52px] pb-8">
      <div className="w-full">
        <h1 className="font-helvetica font-bold text-[20px] leading-[24px] mb-[40px] tracking-0.01">
          Tvoja korpa
        </h1>
        {cartItems.length === 0 ? (
          <p className="text-[16px] text-gray-500">
            Vaša korpa je trenutno prazna. Dodajte proizvode u korpu da biste
            nastavili sa kupovinom.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex mb-6 border-b gap-1 md:gap-0 pb-[20px] md:min-w-[767px]"
            >
              <img
                src={`${import.meta.env.BASE_URL}${item.imageSrc}`}
                alt={item.name}
                className="w-[143px] h-[143px] object-cover"
              />
              <div className="flex-grow ml-[36px]">
                <h2 className="font-bold text-[18px] text-black leading-[18px] mt-[3px] tracking-0">
                  {item.name}
                </h2>
                <p className="text-black text-[15px] leading-[23px] mt-[4px] tracking-0">
                  750 g
                </p>
                <div className="flex items-center gap-[26px] mt-[52px] ml-[1px]">
                  <div className="flex items-center bg-white rounded-full pr-[12px] pl-[12px] pt-[6px] pb-[7px] w-[95.26px] justify-between border border-black">
                    <button
                      className="w-[14px] h-[14px] flex items-center justify-center"
                      aria-label="Decrease quantity"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}Minus.svg`}
                        alt="Minus Icon"
                        className="w-full h-full object-contain"
                      />
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, parseInt(e.target.value))
                      }
                      className="text-black text-[16px] font-medium w-[20px] h-[18px] text-center border-none outline-none"
                    />
                    <button
                      className="w-[14px] h-[14px] flex items-center justify-center"
                      aria-label="Increase quantity"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}Plus.svg`}
                        alt="Plus Icon"
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                  <button
                    className="text-[16px] font-normal text-black underline leading-[28px] tracking-[0] mb-[1px]"
                    style={{ textUnderlineOffset: "6px" }}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Ukloni
                  </button>
                </div>
              </div>
              <div className="text-right mr-[4px] mt-[8px]">
                <ProductPrice
                  price={item.price}
                  quantity={item.quantity}
                  compareAtPrice={item.compare_at_price}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="w-full bg-[#F6F6F6] p-6 pr-[20px] rounded-lg mt-8 lg:mt-[60px] lg:ml-[50px] min-w-[381px] h-[454px] max-h-[454px] lg:sticky lg:top-[10px]">
          <h2 className="font-bold text-[18px] leading-[24px] tracking-[0] mb-[29px]">
            Tvoja narudžbina
          </h2>
          <PaymentInfo label="Ukupno" amount={totalAmount} currency="RSD" />
          <PaymentInfo
            label="Ušteda"
            amount={-totalSavings}
            currency="RSD"
          />{" "}
          <div className="flex justify-between items-center mb-[12px]">
            <span className="text-[16px] leading-[28px] tracking-[0]">
              Isporuka Daily Express*
            </span>
            <span className="text-[12px] leading-[12px] mr-[4px] tracking-0.02">
              Besplatna
            </span>
          </div>
          <div className="flex justify-between items-center mb-[8px] border-t pt-[16px]">
            <span className="text-[16px] leading-[28px] tracking-[0]">
              Ukupno za uplatu
            </span>
            <div className="flex items-start gap-1 mt-[4px]">
              <span className="text-[18px] leading-[25px] tracking--0.01">
                {formatMoney(totalAmount)}
              </span>
              <span className="text-[10px] leading-[12px] text-black ml-[2px] align-top tracking-0.04">
                RSD
              </span>
            </div>
          </div>
          <div className="flex justify-between mb-[34px]">
            <span className="text-[12px] leading-[12px] tracking-0.02">
              Cena je sa uključenim PDV-om
            </span>
          </div>
          <button className="w-full max-w-[333px] bg-black text-white py-3 rounded-full text-[18px] tracking-[0] leading-[18px]">
            Prijavi se za brže plaćanje
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
