import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section9containerComponent } from './section9container.component';

describe('Section9containerComponent', () => {
  let component: Section9containerComponent;
  let fixture: ComponentFixture<Section9containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section9containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section9containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
