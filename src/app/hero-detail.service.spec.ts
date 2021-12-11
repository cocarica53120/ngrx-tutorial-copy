import { TestBed, inject } from '@angular/core/testing';

import { HeroDetailService } from './hero-detail.service';

describe('HeroDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroDetailService]
    });
  });

  it('should be created', inject([HeroDetailService], (service: HeroDetailService) => {
    expect(service).toBeTruthy();
  }));
});
