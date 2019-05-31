import { Component, OnInit } from "@angular/core";
import { ProductService } from "./app.productservice";
import { Product } from "./app.product";


@Component({
    selector: 'prod-app',
    templateUrl: 'app.product.html'
})

export class ProductComponent implements OnInit{

    products: Product[];
    pro:Product={id: 13, name: "Laptop", price:50000, 
                    description: "Dell", inventory:{id:10,name:"amazon"}};
    
    ngOnInit(){
        console.log("In onInit()");
        this.service.getAllProduct().subscribe((data:Product[])=>this.products=data);

    } 
    constructor(private service : ProductService){
        console.log("In Product Cunstroctor");
       
    }

    addProduct(){
        console.log("clicked..");
        console.log(this.pro);
        this.service.addAllProduct(this.pro).subscribe((data=>console.log(data)));
        this.service.getAllProduct().subscribe((data:Product[])=>this.products=data);
    }
}