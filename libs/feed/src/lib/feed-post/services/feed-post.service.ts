import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { FeedPostEntity } from '../models';
import { GET_ALL_FEED_POSTS } from './queries/feed-post.queries';

@Injectable({
  providedIn: 'root',
})
export class FeedPostService {
  constructor(private apollo: Apollo) {}

  getFeedPosts(): Observable<FeedPostEntity[]> {
    return this.apollo
      .query<{ allPosts: FeedPostEntity[] }>({
        query: GET_ALL_FEED_POSTS,
      })
      .pipe(
        map((result): FeedPostEntity[] => result?.data?.allPosts),
        catchError(this.handleError)
      );
  }

  handleError = ({ message }: ApolloError) => {
    return throwError(() => new Error(message));
  };
}
