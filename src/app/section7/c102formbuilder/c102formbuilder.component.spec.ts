import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C102formbuilderComponent } from './c102formbuilder.component';

describe('C102formbuilderComponent', () => {
  let component: C102formbuilderComponent;
  let fixture: ComponentFixture<C102formbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C102formbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C102formbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
