import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  passenger = [
    { name: "Stellar Cheddar Crisps", price: "850k", quantity: "02" },
    { name: "Cosmic Almonmd Crunch", price: "550k", quantity: "04" },
    { name: "CosmicJet Airlines", price: "350k", quantity: "03" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
