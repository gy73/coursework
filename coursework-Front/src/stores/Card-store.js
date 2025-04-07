import { create } from "zustand";
import products

const useCartStore = create((set) =>({
  products,
  addProducts: (product) =>
    set((state) => ({
      products:[
        {name:product.name, id: Math.random() *100 },
        ...state.products,
    ]})),
    removeProduct: id => set((state) => ({
      pokemons: state.products.filter((product) => product.id !== id),
    })),
}));
export default useCartStore