import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesPageComponentComponent } from './beverages-page-component.component';

describe('BeveragesPageComponentComponent', () => {
  let component: BeveragesPageComponentComponent;
  let fixture: ComponentFixture<BeveragesPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeveragesPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeveragesPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
