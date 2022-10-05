import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { FeedPostService } from '../../services';
import * as FeedPostActions from '../actions';

@Injectable()
export class FeedPostEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FeedPostActions.initFeedPost),
      switchMap(() =>
        this.feedPostService.getFeedPosts().pipe(
          map((feedPosts) =>
            FeedPostActions.loadFeedPostSuccess({ feedPost: feedPosts })
          ),
          catchError(async (error: Error) =>
            FeedPostActions.loadFeedPostFailure({ error })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private feedPostService: FeedPostService
  ) {}
}
