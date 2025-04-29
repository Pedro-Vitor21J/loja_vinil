import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinlycardComponent } from './vinlycard.component';

describe('VinlycardComponent', () => {
  let component: VinlycardComponent;
  let fixture: ComponentFixture<VinlycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinlycardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinlycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
