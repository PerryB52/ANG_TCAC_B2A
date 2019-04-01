import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4containerComponent } from './section4container.component';

describe('Section4containerComponent', () => {
  let component: Section4containerComponent;
  let fixture: ComponentFixture<Section4containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section4containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section4containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
