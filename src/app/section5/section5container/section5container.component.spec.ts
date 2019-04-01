import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section5containerComponent } from './section5container.component';

describe('Section5containerComponent', () => {
  let component: Section5containerComponent;
  let fixture: ComponentFixture<Section5containerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section5containerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section5containerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
