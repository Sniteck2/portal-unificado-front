import { TestBed } from '@angular/core/testing';

import { CausaService } from './causa.service';

describe('CausaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CausaService = TestBed.get(CausaService);
    expect(service).toBeTruthy();
  });
});
