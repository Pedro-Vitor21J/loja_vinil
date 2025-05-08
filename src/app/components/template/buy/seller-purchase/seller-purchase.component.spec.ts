import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerPurchaseComponent } from './seller-purchase.component';

describe('SellerPurchaseComponent', () => {
  let component: SellerPurchaseComponent;
  let fixture: ComponentFixture<SellerPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerPurchaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
