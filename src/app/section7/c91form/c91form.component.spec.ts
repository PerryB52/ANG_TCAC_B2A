import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C91formComponent } from './c91form.component';

describe('C91formComponent', () => {
  let component: C91formComponent;
  let fixture: ComponentFixture<C91formComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C91formComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C91formComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
