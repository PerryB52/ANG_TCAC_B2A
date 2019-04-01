import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S6assignment5zippyComponent } from './s6assignment5zippy.component';

describe('S6assignment5zippyComponent', () => {
  let component: S6assignment5zippyComponent;
  let fixture: ComponentFixture<S6assignment5zippyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S6assignment5zippyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S6assignment5zippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
