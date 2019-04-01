import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7containerComponent } from './section7container.component';

describe('Section7containerComponent', () => {
  let component: Section7containerComponent;
  let fixture: ComponentFixture<Section7containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section7containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section7containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
