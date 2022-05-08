import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilledPageComponentComponent } from './chilled-page-component.component';

describe('ChilledPageComponentComponent', () => {
  let component: ChilledPageComponentComponent;
  let fixture: ComponentFixture<ChilledPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilledPageComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilledPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
