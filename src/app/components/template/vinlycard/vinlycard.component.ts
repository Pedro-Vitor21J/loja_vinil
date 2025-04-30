import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vinlycard',
  imports: [],
  templateUrl: './vinlycard.component.html',
  styleUrl: './vinlycard.component.css'
})
export class VinlycardComponent {
  @Input() id!: number;
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() artist!: string;
  @Input() price!: string; 
}
