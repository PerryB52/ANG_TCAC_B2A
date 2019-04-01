import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C61panelComponent } from './c61panel.component';

describe('C61panelComponent', () => {
  let component: C61panelComponent;
  let fixture: ComponentFixture<C61panelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C61panelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C61panelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
