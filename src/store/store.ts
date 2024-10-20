import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import Cookies from "js-cookie";

const loadCartFromCookies = () => {
  const cookieCart = Cookies.get("cart");
  return cookieCart ? JSON.parse(cookieCart) : [];
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: {
      cartItems: loadCartFromCookies(),
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
