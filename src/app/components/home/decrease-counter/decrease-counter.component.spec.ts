import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreaseCounterComponent } from './decrease-counter.component';

describe('DecreaseCounterComponent', () => {
  let component: DecreaseCounterComponent;
  let fixture: ComponentFixture<DecreaseCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecreaseCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreaseCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
