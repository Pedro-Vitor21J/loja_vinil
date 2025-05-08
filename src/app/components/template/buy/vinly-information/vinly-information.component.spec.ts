import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinlyInformationComponent } from './vinly-information.component';

describe('VinlyInformationComponent', () => {
  let component: VinlyInformationComponent;
  let fixture: ComponentFixture<VinlyInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VinlyInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinlyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
