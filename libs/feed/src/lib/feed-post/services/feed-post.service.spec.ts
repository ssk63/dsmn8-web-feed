import { TestBed } from '@angular/core/testing';
import { FeedPostService } from './feed-post.service';

describe('FeedPostService', () => {
  let service: FeedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
