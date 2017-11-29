import { TestBed, inject } from '@angular/core/testing';

import { EducationserviceService } from './educationservice.service';

describe('EducationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EducationserviceService]
    });
  });

  it('should be created', inject([EducationserviceService], (service: EducationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
