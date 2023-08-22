import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const ID = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== ID);
    },
    incrementItem: (state, action) => {
      const ID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === ID);
      cartItem.amount = cartItem.amount + 1;
    },
    decrementItem: (state, action) => {
      const ID = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === ID);
      cartItem.amount = cartItem.amount - 1;
      if (cartItem.amount < 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== ID);
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total.toFixed(2);
    },
  },
});

export const cartActions = cartSlice.actions;
