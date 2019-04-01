import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S8assignment7changepwComponent } from './s8assignment7changepw.component';

describe('S8assignment7changepwComponent', () => {
  let component: S8assignment7changepwComponent;
  let fixture: ComponentFixture<S8assignment7changepwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S8assignment7changepwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S8assignment7changepwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
