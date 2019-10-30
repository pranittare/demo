import { Shopping } from '../shopping-cart/shopping.model'
export class Product {
    public name: string;
    public description: string;
    public imageUrl: string;
    // public shopname: string;
    // public shopdesc: string;
    // public shopamt: string;
    public shopping: Shopping[];
    
    constructor(name: string, desc: string, imageUrl: string, shopping: Shopping[]) {

        this.name= name;
        this.description = desc;
        this.imageUrl = imageUrl;
        this.shopping = shopping;
    }
}