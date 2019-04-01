import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C44styleBindingComponent } from './c44style-binding.component';

describe('C44styleBindingComponent', () => {
  let component: C44styleBindingComponent;
  let fixture: ComponentFixture<C44styleBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C44styleBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C44styleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
