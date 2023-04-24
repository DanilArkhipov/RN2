
import { makeAutoObservable } from 'mobx'


class CartStore {
    cart = {}

    constructor() {
        makeAutoObservable(this)
    }



    addProduct(id: number) {
        if (!this.cart[id]) {
            this.cart[id] = 1
        }
    }

    deleteProduct(id: number) {
        if (this.cart[id]) {
            delete this.cart[id]
        }
    }

    setQuantity(id: number, quantity: number) {
        if (this.cart[id] && quantity > 0) {
            delete this.cart[id]
            this.cart[id] = quantity
        }
    }

    checkProductInCart(id: number) {
        return this.cart[id.toString()]
    }

}

export const cartStore = new CartStore()