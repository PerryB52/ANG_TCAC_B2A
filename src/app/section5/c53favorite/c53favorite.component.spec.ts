import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { C53favoriteComponent } from './c53favorite.component';

describe('C53favoriteComponent', () => {
  let component: C53favoriteComponent;
  let fixture: ComponentFixture<C53favoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ C53favoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(C53favoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
