import { TestBed, inject } from '@angular/core/testing';

import { TweetDetailsService } from './tweet-details.service';

describe('TweetDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TweetDetailsService]
    });
  });

  it('should be created', inject([TweetDetailsService], (service: TweetDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
