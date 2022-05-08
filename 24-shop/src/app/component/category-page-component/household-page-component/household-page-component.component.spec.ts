import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdPageComponentComponent } from './household-page-component.component';

describe('HouseholdPageComponentComponent', () => {
  let component: HouseholdPageComponentComponent;
  let fixture: ComponentFixture<HouseholdPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseholdPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
