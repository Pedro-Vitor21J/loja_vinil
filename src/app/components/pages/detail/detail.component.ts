import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { BuyComponent } from "../../template/buy/buy.component";

@Component({
  selector: 'app-detail',
  imports: [HeaderComponent, FooterComponent, BuyComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
