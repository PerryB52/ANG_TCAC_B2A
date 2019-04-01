import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C43classBindingComponent } from './c43class-binding.component';

describe('C43classBindingComponent', () => {
  let component: C43classBindingComponent;
  let fixture: ComponentFixture<C43classBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C43classBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C43classBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
