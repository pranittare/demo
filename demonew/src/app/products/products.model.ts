import { Shopping } from '../shopping-cart/shopping.model'
export class Product {
    public id: number;
    public name: string;
    public description: string;
    public imageUrl: string;
    // public shopname: string;
    // public shopdesc: string;
    // public shopamt: string;
    public shoppings: Shopping[];
    
    constructor(id: number, name: string, desc: string, imageUrl: string, shoppings: Shopping[]) {
        this.id = id
        this.name= name;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.shoppings = shoppings;
    }
}