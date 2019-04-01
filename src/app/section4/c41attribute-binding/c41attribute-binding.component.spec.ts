import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C41attributeBindingComponent } from './c41attribute-binding.component';

describe('C41attributeBindingComponent', () => {
  let component: C41attributeBindingComponent;
  let fixture: ComponentFixture<C41attributeBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C41attributeBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C41attributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
