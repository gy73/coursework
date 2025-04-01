import { makeAutoObservable } from "mobx"

class CartStore {
  cart=[] 
  constructor(){
    makeAutoObservable(this)
  }

  addProduct = (newProduct) => (
    this.cart = [...this.cart, newProduct]
    
  ) 
}



export default new CartStore()