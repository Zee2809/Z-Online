import { Component, OnInit } from "@angular/core";
import { ZOnlineService } from "../../z-online.service";

import { from } from "rxjs";
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
      .subscribe(data => {
        console.log(data);
      });
  }
}
