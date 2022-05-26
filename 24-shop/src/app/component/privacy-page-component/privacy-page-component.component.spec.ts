import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPageComponentComponent } from './privacy-page-component.component';

describe('PrivacyPageComponentComponent', () => {
  let component: PrivacyPageComponentComponent;
  let fixture: ComponentFixture<PrivacyPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
