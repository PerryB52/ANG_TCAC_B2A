import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C47templateVariablesComponent } from './c47template-variables.component';

describe('C47templateVariablesComponent', () => {
  let component: C47templateVariablesComponent;
  let fixture: ComponentFixture<C47templateVariablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C47templateVariablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C47templateVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
