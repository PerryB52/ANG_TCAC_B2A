import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C64ngifComponent } from './c64ngif.component';

describe('C64ngifComponent', () => {
  let component: C64ngifComponent;
  let fixture: ComponentFixture<C64ngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C64ngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C64ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
