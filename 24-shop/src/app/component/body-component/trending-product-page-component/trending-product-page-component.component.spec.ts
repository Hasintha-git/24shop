import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingProductPageComponentComponent } from './trending-product-page-component.component';

describe('TrendingProductPageComponentComponent', () => {
  let component: TrendingProductPageComponentComponent;
  let fixture: ComponentFixture<TrendingProductPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingProductPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingProductPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
