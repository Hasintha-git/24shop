import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCartComponentComponent } from './search-cart-component.component';

describe('SearchCartComponentComponent', () => {
  let component: SearchCartComponentComponent;
  let fixture: ComponentFixture<SearchCartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCartComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
