import { Component } from '@angular/core';
import { VinlycardComponent } from '../vinyl-card/vinlycard.component';
import { vinyl } from '../../model/vinyl';
import { vinyl_mock } from '../../../../mock/mocks';


@Component({
  selector: 'app-carousel',
  imports: [VinlycardComponent],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent {
  vinyls: vinyl[] = vinyl_mock;
  totalCards: number = this.vinyls.length;
  currentIndex: number = 0;
  cardsOfPages: number = 4;


  next() {
    let nextIndex = this.currentIndex + this.cardsOfPages;
    if (nextIndex < this.totalCards){
      this.currentIndex = nextIndex;
    }
  }

  prev() {
    let prevIndex = this.currentIndex - this.cardsOfPages;
    if (prevIndex >= 0){
      this.currentIndex = prevIndex;
    }
  }

  get visibleVinyls() {
  return this.vinyls.slice(this.currentIndex, this.currentIndex + this.cardsOfPages); 
  }

  get goNext(): boolean {
    return this.currentIndex + this.cardsOfPages < this.totalCards;
  }

  get goPrev(): boolean{
    return this.currentIndex > 0; 
  }
}
