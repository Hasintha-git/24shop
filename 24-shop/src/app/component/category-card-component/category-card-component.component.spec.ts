import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCardComponentComponent } from './category-card-component.component';

describe('CategoryCardComponentComponent', () => {
  let component: CategoryCardComponentComponent;
  let fixture: ComponentFixture<CategoryCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryCardComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
