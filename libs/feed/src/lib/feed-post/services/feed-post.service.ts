import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { FeedPostEntity } from '../models';
import { GET_ALL_FEED_POSTS } from './queries/feed-post.queries';

@Injectable({
  providedIn: 'root',
})
export class FeedPostService {
  constructor(private apollo: Apollo) {}

  getFeedPosts(): Observable<FeedPostEntity[]> {
    return this.apollo
      .watchQuery<{ allPosts: FeedPostEntity[] }>({
        query: GET_ALL_FEED_POSTS,
      })
      .valueChanges.pipe(map((result) => result?.data?.allPosts));
  }
}
