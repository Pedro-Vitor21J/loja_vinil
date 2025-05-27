import { Component, Input } from '@angular/core';
import { vinyl } from '../../../model/vinyl';
import { vinyl_seller_mock } from '../../../../../mock/mocks';
import { vinyl_seller } from './../../../model/vinyl-seller';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-purchase',
  imports: [],
  templateUrl: './seller-purchase.component.html',
  styleUrl: './seller-purchase.component.css'
})
export class SellerPurchaseComponent {
  vinyl_seller?: vinyl_seller;

    constructor(private route: ActivatedRoute){}
  
  
    ngOnInit() {
      const id = this.route.snapshot.paramMap.get('id');
      this.vinyl_seller = vinyl_seller_mock.find(v => v.id === id!)
    }

  unit: number = 1;

  summ() {
    this.unit ++
  };

  sub() {
    this.unit --
  };
}
