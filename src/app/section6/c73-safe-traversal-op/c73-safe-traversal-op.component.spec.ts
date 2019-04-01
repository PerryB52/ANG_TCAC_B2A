import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C73SafeTraversalOpComponent } from './c73-safe-traversal-op.component';

describe('C73SafeTraversalOpComponent', () => {
  let component: C73SafeTraversalOpComponent;
  let fixture: ComponentFixture<C73SafeTraversalOpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C73SafeTraversalOpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C73SafeTraversalOpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
