import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-purchase',
  imports: [],
  templateUrl: './seller-purchase.component.html',
  styleUrl: './seller-purchase.component.css'
})
export class SellerPurchaseComponent {
  unit: number = 1;

  summ() {
    this.unit ++
  };

  sub() {
    this.unit --
  };
}
