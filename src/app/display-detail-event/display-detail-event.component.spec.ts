import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDetailEventComponent } from './display-detail-event.component';

describe('DisplayDetailEventComponent', () => {
  let component: DisplayDetailEventComponent;
  let fixture: ComponentFixture<DisplayDetailEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDetailEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDetailEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
