import { TestBed } from '@angular/core/testing';

import { GrillaResumenService } from './grilla-resumen.service';

describe('GrillaResumenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrillaResumenService = TestBed.get(GrillaResumenService);
    expect(service).toBeTruthy();
  });
});
