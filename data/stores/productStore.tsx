import React from 'react'
import axios from 'axios';
import { runInAction, makeAutoObservable } from 'mobx'
import { ProductModel } from '../models/productModel'


class ProductStore {
    private products: ProductModel[] = [];
    isLoadng: boolean = this.products && this.products.length > 0;

    constructor() {
        makeAutoObservable(this)
    }



    getProducts() {
        if (!this.products || this.products.length === 0) {
            runInAction(() => {
                this.isLoadng = true;
            })

            axios({
                method: 'get',
                url: `https://fakestoreapi.com/products`,
            }).then(response => {
                runInAction(() => {
                    const products: ProductModel[] = response.data
                    products.forEach(product => {
                        this.products.push(product)
                    })
                    this.isLoadng = false;
                })
            })
        }
        return this.products;
    }

    getById(id: number) {
        const products = this.products.filter(product => product.id === id);
        if (products && products.length > 0) {
            return products[0];
        }
        return null;
    }


}

export const productStore = new ProductStore()