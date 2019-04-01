import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3containerComponent } from './section3container.component';

describe('Section3containerComponent', () => {
  let component: Section3containerComponent;
  let fixture: ComponentFixture<Section3containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section3containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section3containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
