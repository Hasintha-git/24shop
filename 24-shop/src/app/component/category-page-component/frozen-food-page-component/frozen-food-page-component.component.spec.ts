import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenFoodPageComponentComponent } from './frozen-food-page-component.component';

describe('FrozenFoodPageComponentComponent', () => {
  let component: FrozenFoodPageComponentComponent;
  let fixture: ComponentFixture<FrozenFoodPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrozenFoodPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenFoodPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
