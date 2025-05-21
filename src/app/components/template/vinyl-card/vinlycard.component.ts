
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vinlycard',
  imports: [CommonModule],
  templateUrl: './vinlycard.component.html',
  styleUrl: './vinlycard.component.css'
})
export class VinlycardComponent {
  @Input() id!: string;
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() artist!: string;
  @Input() price!: string; 

  constructor(private router: Router){};

  openDetail() {
    this.router.navigate(['/catalog', this.id])
    console.log(this.id)
  }
}
