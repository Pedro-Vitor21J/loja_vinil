import { Component } from '@angular/core';

@Component({
  selector: 'app-buy',
  imports: [],
  templateUrl: './buy.component.html',
  styleUrl: './buy.component.css'
})
export class BuyComponent {
  unit: number = 1;

  summ() {
    this.unit ++
  };

  sub() {
    this.unit --
  };
}
