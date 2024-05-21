import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state,action) => {
      state.products=state.products.filter(item=>item.id !== action.payload)
    },
    resetCart: (state) => {
      console.log("ESTADO", state);
      state.products = []
    },

    closeCart: (state) => {
      state.isOpen = false; // Agregar un campo isOpen en el estado inicial para controlar la visibilidad del carrito
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart,removeItem,resetCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;
