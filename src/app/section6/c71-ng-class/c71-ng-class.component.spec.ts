import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C71NgClassComponent } from './c71-ng-class.component';

describe('C71NgClassComponent', () => {
  let component: C71NgClassComponent;
  let fixture: ComponentFixture<C71NgClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C71NgClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C71NgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
