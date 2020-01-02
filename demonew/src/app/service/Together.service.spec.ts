import { TestBed } from '@angular/core/testing';

import { TogetherService } from './Together.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TogetherService = TestBed.get(TogetherService);
    expect(service).toBeTruthy();
  });
});
