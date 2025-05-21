import { Component } from '@angular/core';
import { HeaderComponent } from "../../template/header/header.component";
import { FooterComponent } from "../../template/footer/footer.component";
import { BannerComponent } from "../../template/banner/banner.component";
import { CarouselComponent } from "../../template/carousel/carousel.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, BannerComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
