import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C67NgforComponent } from './c67-ngfor.component';

describe('C67NgforComponent', () => {
  let component: C67NgforComponent;
  let fixture: ComponentFixture<C67NgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C67NgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C67NgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
