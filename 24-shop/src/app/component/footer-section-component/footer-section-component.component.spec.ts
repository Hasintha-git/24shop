import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSectionComponentComponent } from './footer-section-component.component';

describe('FooterSectionComponentComponent', () => {
  let component: FooterSectionComponentComponent;
  let fixture: ComponentFixture<FooterSectionComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSectionComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
