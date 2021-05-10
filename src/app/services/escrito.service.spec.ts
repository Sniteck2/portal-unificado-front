import { TestBed } from '@angular/core/testing';

import { EscritoService } from './escrito.service';

describe('EscritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EscritoService = TestBed.get(EscritoService);
    expect(service).toBeTruthy();
  });
});
