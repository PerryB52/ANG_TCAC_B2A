import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section6containerComponent } from './section6container.component';

describe('Section6containerComponent', () => {
  let component: Section6containerComponent;
  let fixture: ComponentFixture<Section6containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section6containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section6containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
