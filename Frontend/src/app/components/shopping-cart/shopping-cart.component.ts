import { ShoppingCartResponse } from './shopping-cart-response';
import { Component, OnInit } from "@angular/core";
import { ZOnlineService } from "../../z-online.service";
import { ShoppingCart } from './shopping-cart';


@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"]
})
export class ShoppingCartComponent implements OnInit {
  name: string;
  surname: string;
  gender: string;
  phone: string;
  email: string;
  city: string;
  province: string;
  township: string;
  street: string;
  code: string;
  product: [];

  constructor(private onlineService: ZOnlineService) {}

  orderrespose:ShoppingCart = new ShoppingCart;

  ngOnInit() {}
  Order() {
    this.onlineService
      .PlaceOrder(
        this.name,
        this.surname,
        this.gender,
        this.phone,
        this.email,
        this.city,
        this.province,
        this.township,
        this.street,
        this.code,
        this.product
      )
      .subscribe((data:ShoppingCart) => {
        console.log(data);
        this.orderrespose = data;
        this.orderrespose.name = this.name;
        this.orderrespose.surname = this.surname;
        this.orderrespose.gender = this.gender;
        this.orderrespose.phone = this.phone;
        this.orderrespose.email = this.email;
        this.orderrespose.city = this.city;
        this.orderrespose.province = this.province;
        this.orderrespose.township = this.township;
        this.orderrespose.street = this.street;
        this.orderrespose.code = this.code
        console.log(this.orderrespose);
       
      });
  }
}
