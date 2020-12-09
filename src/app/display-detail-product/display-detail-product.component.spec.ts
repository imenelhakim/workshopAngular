import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailProductComponent } from './display-detail-product.component';

describe('DisplayDetailProductComponent', () => {
  let component: DisplayDetailProductComponent;
  let fixture: ComponentFixture<DisplayDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
