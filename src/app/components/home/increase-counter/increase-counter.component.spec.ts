import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseCounterComponent } from './increase-counter.component';

describe('IncreaseCounterComponent', () => {
  let component: IncreaseCounterComponent;
  let fixture: ComponentFixture<IncreaseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
