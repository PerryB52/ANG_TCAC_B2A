import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S5assignment4Component } from './s5assignment4.component';

describe('S5assignment4Component', () => {
  let component: S5assignment4Component;
  let fixture: ComponentFixture<S5assignment4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S5assignment4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S5assignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
