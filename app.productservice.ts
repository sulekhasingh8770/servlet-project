import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { Product } from "./app.product";

@Injectable({
    providedIn: 'root'
})

export class ProductService{

    // options={
    //     headers: new HttpHeaders({
    //         'Access-Control-Allow-Headers': 'Content-Type',
    //     })
    // }
    constructor(private http: HttpClient){

    }

    getAllProduct(): Observable<Object>{
       //return this.http.get("assets/product.json");
       return this.http.get("http://localhost:8082/product/show");
    }

    addAllProduct(prod:Product){
        console.log(prod);
        return this.http.post("http://localhost:8082/product/addAll",prod);
    }
    
}