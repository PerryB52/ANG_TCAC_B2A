import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S3Assignment1Component } from './s3-assignment1.component';

describe('S3Assignment1Component', () => {
  let component: S3Assignment1Component;
  let fixture: ComponentFixture<S3Assignment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S3Assignment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S3Assignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
