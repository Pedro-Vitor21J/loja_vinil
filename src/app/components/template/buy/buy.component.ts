import { Component, Input } from '@angular/core';
import { VinlyInformationComponent } from "./vinyl-info/vinly-information.component";
import { SellerPurchaseComponent } from "./seller-purchase/seller-purchase.component";
import { OtherInformationComponent } from "./other-info/other-information.component";
import { CarouselComponent } from "../carousel/carousel.component";
import { vinyl } from '../../model/vinyl';
import { vinyl_info_mock } from '../../../../mock/mocks';

@Component({
  selector: 'app-buy',
  imports: [VinlyInformationComponent, SellerPurchaseComponent, OtherInformationComponent, CarouselComponent],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  
}
