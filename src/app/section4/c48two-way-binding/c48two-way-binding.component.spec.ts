import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C48twoWayBindingComponent } from './c48two-way-binding.component';

describe('C48twoWayBindingComponent', () => {
  let component: C48twoWayBindingComponent;
  let fixture: ComponentFixture<C48twoWayBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C48twoWayBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C48twoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
