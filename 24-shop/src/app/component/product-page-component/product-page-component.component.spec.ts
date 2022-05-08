import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponentComponent } from './product-page-component.component';

describe('ProductPageComponentComponent', () => {
  let component: ProductPageComponentComponent;
  let fixture: ComponentFixture<ProductPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
