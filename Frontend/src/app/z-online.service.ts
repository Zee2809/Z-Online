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
    NAME: string,
    SURNAME: string,
    GENDER: string,
    PHONE: string,
    EMAIL: string,
    CITY: string,
    PROVINCE: string,
    TOWNSHIP: string,
    STREET: string,
    CODE: string,
    PRODUCT: []
  ) {
    let PlaceOrder: ShoppingCart = new ShoppingCart();
    PlaceOrder.name = NAME; 
    PlaceOrder.surname = SURNAME;
    PlaceOrder.gender = GENDER;
    PlaceOrder.phone = PHONE;
    PlaceOrder.email = EMAIL;
    PlaceOrder.city = CITY;
    PlaceOrder.province = PROVINCE;
    PlaceOrder.township = TOWNSHIP;
    PlaceOrder.street = STREET;
    PlaceOrder.code = CODE;
    PlaceOrder.product = PRODUCT;

    return this.http.post<ShoppingCartResponse>(
     `${this.APIURL}/order` ,
      PlaceOrder
    );

    //   this.name = "wertfygu";
    // this.surname= "fgjkl";
    // this.gender = "frjk";
    // this.phone = "rtjkl";
    // this.email = "ertf;";
    // this.city = "seu";
    // this.province = "qwj";
    // this.township = "dgfhjk";
    // this.street = "sfjk";
    // this.code = "esdrhjk";
    // this.product = []
  }
}
