import { TestBed } from '@angular/core/testing';

import { ZOnlineService } from './z-online.service';

describe('ZOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZOnlineService = TestBed.get(ZOnlineService);
    expect(service).toBeTruthy();
  });
});
