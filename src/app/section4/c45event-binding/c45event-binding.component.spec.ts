import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C45eventBindingComponent } from './c45event-binding.component';

describe('C45eventBindingComponent', () => {
  let component: C45eventBindingComponent;
  let fixture: ComponentFixture<C45eventBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C45eventBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C45eventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
