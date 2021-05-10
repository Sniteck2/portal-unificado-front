import { TestBed } from '@angular/core/testing';

import { TipoCausaService } from './tipo-causa.service';

describe('TipoCausaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoCausaService = TestBed.get(TipoCausaService);
    expect(service).toBeTruthy();
  });
});
