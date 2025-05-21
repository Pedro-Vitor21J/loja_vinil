import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { VinlycardComponent } from "../../template/vinyl-card/vinlycard.component";
import { vinyl } from '../../model/vinyl';
import { vinyl_mock } from '../../../../mock/mocks';
import { FooterComponent } from "../../template/footer/footer.component";
import { FiltersComponent } from "../../template/filters/filters.component";



@Component({
  selector: 'app-catalog',
  imports: [HeaderComponent, VinlycardComponent, FooterComponent, FiltersComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})

export class CatalogComponent {
  vinyls: vinyl[] = vinyl_mock; 
}
