import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { VinlycardComponent } from "../../template/vinlycard/vinlycard.component";
import { vinly } from '../../model/vinly';
import { vinly_mock } from '../../../../mock/mocks';



@Component({
  selector: 'app-catalog',
  imports: [HeaderComponent, VinlycardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  vinlys: vinly[] = vinly_mock; 
}
