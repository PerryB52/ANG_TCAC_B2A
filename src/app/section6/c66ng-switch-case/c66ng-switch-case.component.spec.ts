import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C66ngSwitchCaseComponent } from './c66ng-switch-case.component';

describe('C66ngSwitchCaseComponent', () => {
  let component: C66ngSwitchCaseComponent;
  let fixture: ComponentFixture<C66ngSwitchCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C66ngSwitchCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C66ngSwitchCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
