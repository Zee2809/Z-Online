import { ShoppingCartResponse } from "./components/shopping-cart/shopping-cart-response";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { ShoppingCart } from "./components/shopping-cart/shopping-cart";

@Injectable({
  providedIn: "root"
})
// var url=" http://localhost:5000/order"
export class ZOnlineService {
  APIURL: string = environment.URL;

  constructor(private http: HttpClient) {}
  PlaceOrder(
    name:string,
    surname:string,
    gender:string,
    phone:string,
    email:string,
    city:string,
    province:string,
    township:string,
    street:string,
    code:string,
    product:[],
   ) {
let order : ShoppingCart = new ShoppingCart;

    return this.http.post(`${this.APIURL}/order`, order );
  }
  
}
