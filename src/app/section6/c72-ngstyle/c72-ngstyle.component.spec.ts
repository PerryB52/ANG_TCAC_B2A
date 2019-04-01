import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C72NgstyleComponent } from './c72-ngstyle.component';

describe('C72NgstyleComponent', () => {
  let component: C72NgstyleComponent;
  let fixture: ComponentFixture<C72NgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C72NgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C72NgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
