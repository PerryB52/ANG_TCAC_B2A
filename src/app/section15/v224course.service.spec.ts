import { TestBed, inject } from '@angular/core/testing';

import { V224courseService } from './v224course.service';

describe('V224courseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [V224courseService]
    });
  });

  it('should be created', inject([V224courseService], (service: V224courseService) => {
    expect(service).toBeTruthy();
  }));
});
