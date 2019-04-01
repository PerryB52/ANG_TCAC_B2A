import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S9assignment8Component } from './s9assignment8.component';

describe('S9assignment8Component', () => {
  let component: S9assignment8Component;
  let fixture: ComponentFixture<S9assignment8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S9assignment8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S9assignment8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
