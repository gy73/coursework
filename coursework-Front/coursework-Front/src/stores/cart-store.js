import { makeAutoObservable } from "mobx"
import { product } from "../components/Main/Products"

class CartStore {
  product=[] 
  constructor(){
    makeAutoObservable(this)
  }

  addProduct = (newProduct) => (
    this.product = [...this.product, newProduct]
  ) 

  
}



export default new CartStore()