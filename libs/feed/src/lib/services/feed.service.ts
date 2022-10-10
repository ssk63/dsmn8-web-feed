import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ApolloError } from '@apollo/client';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IFeed } from '../models';
import { GET_ALL_FEED } from './queries/feed.queries';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private apollo: Apollo) {}

  getAllFeeds(): Observable<IFeed[]> {
    return this.apollo
      .query<{ allFeeds: IFeed[] }>({
        query: GET_ALL_FEED,
      })
      .pipe(
        map((result): IFeed[] => result?.data?.allFeeds),
        catchError((error: ApolloError) =>
          throwError(() => new Error(error?.message))
        )
      );
  }
}
