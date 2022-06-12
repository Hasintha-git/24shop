import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBannerTwoPageComponentComponent } from './add-banner-two-page-component.component';

describe('AddBannerTwoPageComponentComponent', () => {
  let component: AddBannerTwoPageComponentComponent;
  let fixture: ComponentFixture<AddBannerTwoPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBannerTwoPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBannerTwoPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
