import { create } from "zustand";
import { products } from '../components/Main/Products'

export const useCartStore = create((set) =>({
  products,
  addProduct: (product) =>
    set((state) => ({
      products:[
        {name:product.name, id: Date.now() },
        ...state.products,
    ]})),
    removeProduct: id => set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
}));