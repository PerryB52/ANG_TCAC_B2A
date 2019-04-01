import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C50customPipeComponent } from './c50custom-pipe.component';

describe('C50customPipeComponent', () => {
  let component: C50customPipeComponent;
  let fixture: ComponentFixture<C50customPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C50customPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C50customPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
