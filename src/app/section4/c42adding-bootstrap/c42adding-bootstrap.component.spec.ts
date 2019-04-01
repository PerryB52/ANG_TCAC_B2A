import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C42addingBootstrapComponent } from './c42adding-bootstrap.component';

describe('C42addingBootstrapComponent', () => {
  let component: C42addingBootstrapComponent;
  let fixture: ComponentFixture<C42addingBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C42addingBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C42addingBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
