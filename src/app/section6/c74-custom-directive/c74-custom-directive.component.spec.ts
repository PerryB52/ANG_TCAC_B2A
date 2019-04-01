import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C74CustomDirectiveComponent } from './c74-custom-directive.component';

describe('C74CustomDirectiveComponent', () => {
  let component: C74CustomDirectiveComponent;
  let fixture: ComponentFixture<C74CustomDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C74CustomDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C74CustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
