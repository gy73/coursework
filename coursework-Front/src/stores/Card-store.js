import { createSlice } from '@reduxjs/toolkit'
import product from '../components/Main/Products'

const createSlice = createSlice({
  name:'cart',
  initialState:{
   items: [ /* product.id, product.designer, product.description, product.image, product.price */ ],
    totalItems: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingItem = state.items.find((item) => item.id === product.id)
    

    if (existingItem) {
      existingItem.quantity += 1; 
    } else {
      state.items.push({...product, quantity: 1});
    }

    state.totalItems += 1;
    state.totalPrice += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },

    updateQuantity: (state, action) => {
      const {id, quantity} = action.payload;
      const existingItem = state.items.find((item) => item.id ===id);

      if (existingItem) {
        const quantityDiff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.totalItems += quantityDiff;
        state.totalPrice += quantityDiff * existingItem.price
      }
    },
  },
});

export const {addToCart, removeFromCart, updateQuantity} = cartSlice.actions;
export default cartSlice.reducer