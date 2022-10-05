import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeedPostEntity, mockFeedPosts } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FeedPostService {
  getFeedPosts(): Observable<FeedPostEntity[]> {
    return of(mockFeedPosts);
  }
}
