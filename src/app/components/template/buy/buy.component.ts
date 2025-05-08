import { Component } from '@angular/core';
import { VinlyInformationComponent } from "./vinly-information/vinly-information.component";
import { SellerPurchaseComponent } from "./seller-purchase/seller-purchase.component";
import { OtherInformationComponent } from "./other-information/other-information.component";

@Component({
  selector: 'app-buy',
  imports: [VinlyInformationComponent, SellerPurchaseComponent, OtherInformationComponent],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {

}
