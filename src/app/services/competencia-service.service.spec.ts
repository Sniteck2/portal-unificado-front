import { TestBed } from '@angular/core/testing';

import { CompetenciaServiceService } from './competencia-service.service';

describe('CompetenciaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompetenciaServiceService = TestBed.get(CompetenciaServiceService);
    expect(service).toBeTruthy();
  });
});
