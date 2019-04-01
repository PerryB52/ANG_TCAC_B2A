import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C49pipesComponent } from './c49pipes.component';

describe('C49pipesComponent', () => {
  let component: C49pipesComponent;
  let fixture: ComponentFixture<C49pipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C49pipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C49pipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
