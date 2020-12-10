import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTwoWayComponent } from './form-two-way.component';

describe('FormTwoWayComponent', () => {
  let component: FormTwoWayComponent;
  let fixture: ComponentFixture<FormTwoWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTwoWayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
