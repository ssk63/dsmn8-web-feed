import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { FeedEntity } from '../models';
import { GET_ALL_FEED } from './queries/feed.queries';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private apollo: Apollo) {}

  getAllFeeds(): Observable<FeedEntity[]> {
    return this.apollo
      .query<{ allFeeds: FeedEntity[] }>({
        query: GET_ALL_FEED,
      })
      .pipe(
        map((result): FeedEntity[] => result?.data?.allFeeds),
        catchError(this.handleError)
      );
  }

  handleError = ({ message }: ApolloError) => {
    return throwError(() => new Error(message));
  };
}
