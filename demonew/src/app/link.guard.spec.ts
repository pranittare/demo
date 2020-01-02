import { TestBed, async, inject } from '@angular/core/testing';

import { LinkGuard } from './link.guard';

describe('LinkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkGuard]
    });
  });

  it('should ...', inject([LinkGuard], (guard: LinkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
