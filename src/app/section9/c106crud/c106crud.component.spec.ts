import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C106crudComponent } from './c106crud.component';

describe('C106crudComponent', () => {
  let component: C106crudComponent;
  let fixture: ComponentFixture<C106crudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C106crudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C106crudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
