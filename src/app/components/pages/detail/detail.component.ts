import { routes } from './../../../app.routes';
import { vinyl_info } from './../../model/vinyl-info';
import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { BuyComponent } from "../../template/buy/buy.component";
import { ActivatedRoute } from '@angular/router';
import { vinyl_info_mock } from '../../../../mock/mocks';

@Component({
  selector: 'app-detail',
  imports: [HeaderComponent, FooterComponent, BuyComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}