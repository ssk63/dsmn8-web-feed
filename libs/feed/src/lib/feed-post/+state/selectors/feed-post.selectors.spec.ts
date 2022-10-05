import { FeedPostEntity } from '../../models/feed-post.interface';
import {
  feedPostAdapter,
  FeedPostPartialState,
  initialFeedPostState,
} from '../reducers';
import * as FeedPostSelectors from './feed-post.selectors';

describe('FeedPost Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFeedPostId = (it: FeedPostEntity) => it.id;
  const createFeedPostEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FeedPostEntity);

  let state: FeedPostPartialState;

  beforeEach(() => {
    state = {
      feedPost: feedPostAdapter.setAll(
        [
          createFeedPostEntity('PRODUCT-AAA'),
          createFeedPostEntity('PRODUCT-BBB'),
          createFeedPostEntity('PRODUCT-CCC'),
        ],
        {
          ...initialFeedPostState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('FeedPost Selectors', () => {
    it('getAllFeedPost() should return the list of FeedPost', () => {
      const results = FeedPostSelectors.getAllFeedPost(state);
      const selId = getFeedPostId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getFeedPostLoaded() should return the current "loaded" status', () => {
      const result = FeedPostSelectors.getFeedPostLoaded(state);

      expect(result).toBe(true);
    });

    it('getFeedPostError() should return the current "error" state', () => {
      const result = FeedPostSelectors.getFeedPostError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
