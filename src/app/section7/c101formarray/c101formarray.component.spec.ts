import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C101formarrayComponent } from './c101formarray.component';

describe('C101formarrayComponent', () => {
  let component: C101formarrayComponent;
  let fixture: ComponentFixture<C101formarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C101formarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C101formarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
