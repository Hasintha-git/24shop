import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBanerComponentComponent } from './add-baner-component.component';

describe('AddBanerComponentComponent', () => {
  let component: AddBanerComponentComponent;
  let fixture: ComponentFixture<AddBanerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBanerComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBanerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
