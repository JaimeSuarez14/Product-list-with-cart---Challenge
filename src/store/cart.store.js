import { create } from "zustand";
import data from "../../data.json";

export const useCartStore = create((set, get) =>(
  {
    isClose:false,
    cart: [],
    products: data.map(e => e),


    toggleClose: () => set((state) =>({
      isClose: !state.isClose,
    
    })),

    addItemToCart: (newItem) => set((state) =>({
      cart: [...state.cart, newItem],
    
    })),

    updateItemInCart: (updateItem) => set((state) =>({
      cart: state.cart.map( item => item.name === updateItem.name ? {...updateItem}:item )
    
    })),

    deleteItemCart: (name) => set((state) =>({
      cart: state.cart.filter( item => item.name !== name)
    })),


    totalCart: () => get().cart.reduce( (acc, item) => acc + (item.quantity * item.price), 0),

    resetCart: () => set((state) => ({cart:[]}) )
    
  }
))