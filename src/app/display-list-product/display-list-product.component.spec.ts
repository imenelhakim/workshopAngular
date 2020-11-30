import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListProductComponent } from './display-list-product.component';

describe('DisplayListProductComponent', () => {
  let component: DisplayListProductComponent;
  let fixture: ComponentFixture<DisplayListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayListProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
