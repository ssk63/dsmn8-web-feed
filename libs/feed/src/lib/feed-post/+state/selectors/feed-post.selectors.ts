import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  feedPostAdapter,
  FeedPostState,
  FEED_POST_FEATURE_KEY,
} from '../reducers';

// Lookup the 'FeedPost' feature state managed by NgRx
export const getFeedPostState = createFeatureSelector<FeedPostState>(
  FEED_POST_FEATURE_KEY
);

const { selectAll, selectEntities } = feedPostAdapter.getSelectors();

export const getFeedPostLoaded = createSelector(
  getFeedPostState,
  (state: FeedPostState) => state.loaded
);

export const getFeedPostError = createSelector(
  getFeedPostState,
  (state: FeedPostState) => state.error
);

export const getAllFeedPost = createSelector(
  getFeedPostState,
  (state: FeedPostState) => selectAll(state)
);

export const getFeedPostEntities = createSelector(
  getFeedPostState,
  (state: FeedPostState) => selectEntities(state)
);
