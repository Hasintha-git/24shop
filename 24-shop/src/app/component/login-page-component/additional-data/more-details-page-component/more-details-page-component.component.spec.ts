import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsPageComponentComponent } from './more-details-page-component.component';

describe('MoreDetailsPageComponentComponent', () => {
  let component: MoreDetailsPageComponentComponent;
  let fixture: ComponentFixture<MoreDetailsPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreDetailsPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreDetailsPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
