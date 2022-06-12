import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBannerThreePageComponentComponent } from './add-banner-three-page-component.component';

describe('AddBannerThreePageComponentComponent', () => {
  let component: AddBannerThreePageComponentComponent;
  let fixture: ComponentFixture<AddBannerThreePageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBannerThreePageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBannerThreePageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
