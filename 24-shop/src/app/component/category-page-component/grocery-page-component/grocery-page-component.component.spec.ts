import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryPageComponentComponent } from './grocery-page-component.component';

describe('GroceryPageComponentComponent', () => {
  let component: GroceryPageComponentComponent;
  let fixture: ComponentFixture<GroceryPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
