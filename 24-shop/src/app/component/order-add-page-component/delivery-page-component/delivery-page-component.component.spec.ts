import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPageComponentComponent } from './delivery-page-component.component';

describe('DeliveryPageComponentComponent', () => {
  let component: DeliveryPageComponentComponent;
  let fixture: ComponentFixture<DeliveryPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
