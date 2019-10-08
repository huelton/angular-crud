import { TestBed, inject } from '@angular/core/testing';

import { ContatoDataService } from './contato-data.service';

describe('ContatoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoDataService]
    });
  });

  it('should be created', inject([ContatoDataService], (service: ContatoDataService) => {
    expect(service).toBeTruthy();
  }));
});
