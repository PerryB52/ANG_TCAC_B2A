import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section15containerComponent } from './section15container.component';

describe('Section15containerComponent', () => {
  let component: Section15containerComponent;
  let fixture: ComponentFixture<Section15containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section15containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section15containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
