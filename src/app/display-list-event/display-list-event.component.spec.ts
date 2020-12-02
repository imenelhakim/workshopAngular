import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayListEventComponent } from './display-list-event.component';

describe('DisplayListEventComponent', () => {
  let component: DisplayListEventComponent;
  let fixture: ComponentFixture<DisplayListEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayListEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayListEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
