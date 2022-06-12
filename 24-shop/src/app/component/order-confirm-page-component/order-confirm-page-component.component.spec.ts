import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConfirmPageComponentComponent } from './order-confirm-page-component.component';

describe('OrderConfirmPageComponentComponent', () => {
  let component: OrderConfirmPageComponentComponent;
  let fixture: ComponentFixture<OrderConfirmPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderConfirmPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConfirmPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
