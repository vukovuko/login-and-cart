import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

interface CartItem {
  id: number;
  name: string;
  price: number;
  compare_at_price?: number;
  imageSrc: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const saveCartToCookies = (cartItems: CartItem[]) => {
  Cookies.set("cart", JSON.stringify(cartItems), { expires: 7 });
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push({ ...action.payload });
      }
      saveCartToCookies(state.cartItems);
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      saveCartToCookies(state.cartItems);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>,
    ) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id,
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
      saveCartToCookies(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
