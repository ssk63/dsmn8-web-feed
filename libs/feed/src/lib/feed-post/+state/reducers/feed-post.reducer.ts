import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { FeedPostEntity } from '../../models';
import * as FeedPostActions from '../actions';

export const FEED_POST_FEATURE_KEY = 'feedPost';

export interface FeedPostState extends EntityState<FeedPostEntity> {
  loading: boolean; // has the FeedPost list been loading
  loaded: boolean; // has the FeedPost list been loaded
  error?: string | null; // last known error (if any)
}

export interface FeedPostPartialState {
  readonly [FEED_POST_FEATURE_KEY]: FeedPostState;
}

export const feedPostAdapter: EntityAdapter<FeedPostEntity> =
  createEntityAdapter<FeedPostEntity>();

export const initialFeedPostState: FeedPostState =
  feedPostAdapter.getInitialState({
    // set initial required properties
    loading: false,
    loaded: false,
  });

const reducer = createReducer(
  initialFeedPostState,
  on(FeedPostActions.initFeedPost, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(FeedPostActions.loadFeedPostSuccess, (state, { feedPost }) =>
    feedPostAdapter.setAll(feedPost, {
      ...state,
      loading: false,
      loaded: true,
    })
  ),
  on(FeedPostActions.loadFeedPostFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function feedPostReducer(
  state: FeedPostState | undefined,
  action: Action
) {
  return reducer(state, action);
}
