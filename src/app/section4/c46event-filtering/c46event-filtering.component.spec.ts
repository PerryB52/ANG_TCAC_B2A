import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C46eventFilteringComponent } from './c46event-filtering.component';

describe('C46eventFilteringComponent', () => {
  let component: C46eventFilteringComponent;
  let fixture: ComponentFixture<C46eventFilteringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C46eventFilteringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C46eventFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
