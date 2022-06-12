import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAddPageComponentComponent } from './order-add-page-component.component';

describe('OrderAddPageComponentComponent', () => {
  let component: OrderAddPageComponentComponent;
  let fixture: ComponentFixture<OrderAddPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderAddPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderAddPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
