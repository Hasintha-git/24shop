import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponentComponent } from './contact-page-component.component';

describe('ContactPageComponentComponent', () => {
  let component: ContactPageComponentComponent;
  let fixture: ComponentFixture<ContactPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
