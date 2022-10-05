import { createAction, props } from '@ngrx/store';
import { FeedPostEntity } from '../../models';

export const initFeedPost = createAction('[FeedPost Page] Init');

export const loadFeedPostSuccess = createAction(
  '[FeedPost/API] Load FeedPost Success',
  props<{ feedPost: FeedPostEntity[] }>()
);

export const loadFeedPostFailure = createAction(
  '[FeedPost/API] Load FeedPost Failure',
  props<{ error: any }>()
);
